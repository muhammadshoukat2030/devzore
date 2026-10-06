import axios from "axios";
import cookieManager from "../utils/cookieManager";

// ======================================================
// API CONFIG
// ======================================================

const DEFAULT_LOCAL_API_URL =
  "http://localhost:5000/api";

const DEFAULT_TIMEOUT = 20000; // 20 sec

/*
 * Google Drive image upload/compression mein
 * normal API request se zyada time lag sakta hai.
 */
const UPLOAD_TIMEOUT = 60000; // 60 sec

const MAX_GET_RETRIES = 2;

// ======================================================
// NORMALIZE API URL
// ======================================================

const normalizeApiUrl = (value) => {
  const url = String(
    value || DEFAULT_LOCAL_API_URL
  )
    .trim()
    .replace(/\/+$/, "");

  return url || DEFAULT_LOCAL_API_URL;
};

const API_URL = normalizeApiUrl(
  import.meta.env.VITE_API_URL
);

// ======================================================
// ENVIRONMENT
// ======================================================

const isDevelopment =
  import.meta.env.DEV === true;

// ======================================================
// SAFE LOGGING
// ======================================================

const debugLog = (...args) => {
  if (isDevelopment) {
    console.log(...args);
  }
};

const debugWarn = (...args) => {
  if (isDevelopment) {
    console.warn(...args);
  }
};

const debugError = (...args) => {
  if (isDevelopment) {
    console.error(...args);
  }
};

// ======================================================
// AXIOS INSTANCE
// ======================================================

const api = axios.create({
  baseURL: API_URL,

  timeout: DEFAULT_TIMEOUT,

  /*
   * Keep this because your backend CORS config
   * already supports credentials.
   *
   * Bearer JWT still remains the primary auth method.
   */
  withCredentials: true,

  headers: {
    Accept: "application/json",
  },
});

// ======================================================
// GET AUTH TOKEN
// ======================================================

const getAuthToken = () => {
  try {
    /*
     * Browser guard.
     */
    if (typeof window === "undefined") {
      return null;
    }

    // ----------------------------------------------
    // 1. localStorage
    // ----------------------------------------------

    const localToken =
      window.localStorage.getItem(
        "adminToken"
      );

    if (
      typeof localToken === "string" &&
      localToken.trim()
    ) {
      return localToken.trim();
    }

    // ----------------------------------------------
    // 2. Cookie fallback
    // ----------------------------------------------

    const cookieToken =
      cookieManager.getCookie(
        "adminToken"
      );

    if (
      typeof cookieToken === "string" &&
      cookieToken.trim()
    ) {
      return cookieToken.trim();
    }

    return null;
  } catch (error) {
    debugError(
      "❌ Failed to read authentication token:",
      error?.message || error
    );

    return null;
  }
};

// ======================================================
// REMOVE CONTENT TYPE
// ======================================================

const removeContentTypeHeader = (
  headers
) => {
  if (!headers) {
    return;
  }

  /*
   * AxiosHeaders
   */
  if (
    typeof headers.delete ===
    "function"
  ) {
    headers.delete(
      "Content-Type"
    );

    headers.delete(
      "content-type"
    );

    return;
  }

  /*
   * Plain object fallback
   */
  delete headers["Content-Type"];
  delete headers["content-type"];
};

// ======================================================
// REQUEST INTERCEPTOR
// ======================================================

api.interceptors.request.use(
  (config) => {
    const method =
      String(
        config.method ||
          "GET"
      ).toUpperCase();

    const token =
      getAuthToken();

    config.headers =
      config.headers || {};

    // ----------------------------------------------
    // JWT
    // ----------------------------------------------

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;

      debugLog(
        `🔐 JWT attached → ${method} ${config.url}`
      );
    } else {
      debugLog(
        `ℹ️ Public/no-token request → ${method} ${config.url}`
      );
    }

    // ----------------------------------------------
    // FORMDATA
    // ----------------------------------------------

    const isFormData =
      typeof FormData !==
        "undefined" &&
      config.data instanceof
        FormData;

    if (isFormData) {
      /*
       * Never manually set:
       *
       * multipart/form-data
       *
       * Browser/Axios ko boundary generate
       * karne do.
       */
      removeContentTypeHeader(
        config.headers
      );

      /*
       * Google Drive upload ko slightly longer
       * timeout.
       */
      config.timeout =
        UPLOAD_TIMEOUT;

      debugLog(
        `📦 FormData request → ${method} ${config.url}`
      );
    }

    return config;
  },

  (error) => {
    debugError(
      "❌ Request interceptor error:",
      error?.message || error
    );

    return Promise.reject(
      error
    );
  }
);

// ======================================================
// RETRY HELPERS
// ======================================================

const isSafeRetryMethod = (
  method
) => {
  const safeMethods = [
    "get",
    "head",
    "options",
  ];

  return safeMethods.includes(
    String(
      method || ""
    ).toLowerCase()
  );
};

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const getRetryDelay = (
  error,
  retryNumber
) => {
  const retryAfter =
    error?.response?.headers?.[
      "retry-after"
    ];

  /*
   * Retry-After in seconds.
   */
  const parsedRetryAfter =
    Number(retryAfter);

  if (
    Number.isFinite(
      parsedRetryAfter
    ) &&
    parsedRetryAfter > 0
  ) {
    return Math.min(
      parsedRetryAfter *
        1000,
      10000
    );
  }

  /*
   * Exponential:
   * retry 1 -> 2 sec
   * retry 2 -> 4 sec
   */
  return Math.min(
    Math.pow(
      2,
      retryNumber
    ) * 1000,
    5000
  );
};

// ======================================================
// RESPONSE INTERCEPTOR
// ======================================================

api.interceptors.response.use(
  // SUCCESS
  (response) => {
    return response;
  },

  // ERROR
  async (error) => {
    const status =
      error?.response?.status;

    const config =
      error?.config || {};

    const url =
      config.url ||
      "unknown";

    const method =
      String(
        config.method ||
          "REQUEST"
      ).toUpperCase();

    // ----------------------------------------------
    // NETWORK / TIMEOUT
    // ----------------------------------------------

    if (!error.response) {
      if (
        error.code ===
          "ECONNABORTED" ||
        error.code ===
          "ETIMEDOUT"
      ) {
        debugError(
          `❌ Request timeout → ${method} ${url}`
        );

        error.message =
          "The request took too long. Please try again.";
      } else {
        debugError(
          `❌ Network error → ${method} ${url}`,
          error?.message
        );

        error.message =
          "Network error. Please check that the backend server is running and try again.";
      }

      return Promise.reject(
        error
      );
    }

    // ----------------------------------------------
    // 400
    // ----------------------------------------------

    if (status === 400) {
      debugError(
        `❌ 400 Bad Request → ${method} ${url}`,
        error.response?.data
      );
    }

    // ----------------------------------------------
    // 401
    // ----------------------------------------------

    if (status === 401) {
      debugError(
        `❌ 401 Unauthorized → ${method} ${url}`,
        error.response?.data
      );

      debugLog(
        "JWT present:",
        Boolean(
          getAuthToken()
        )
      );

      /*
       * IMPORTANT:
       *
       * Token yahan automatically delete nahi
       * kar rahe.
       *
       * AuthContext/authService decide karega
       * ke login session invalid hai ya sirf
       * ek request fail hui hai.
       */
    }

    // ----------------------------------------------
    // 403
    // ----------------------------------------------

    if (status === 403) {
      debugError(
        `❌ 403 Forbidden → ${method} ${url}`,
        error.response?.data
      );
    }

    // ----------------------------------------------
    // 404
    // ----------------------------------------------

    if (status === 404) {
      debugWarn(
        `⚠️ 404 Not Found → ${method} ${url}`
      );
    }

    // ----------------------------------------------
    // 409
    // ----------------------------------------------

    if (status === 409) {
      debugWarn(
        `⚠️ 409 Conflict → ${method} ${url}`,
        error.response?.data
      );
    }

    // ----------------------------------------------
    // 413
    // ----------------------------------------------

    if (status === 413) {
      debugError(
        `❌ File too large → ${method} ${url}`
      );

      error.message =
        error?.response?.data
          ?.message ||
        "The selected file is too large.";
    }

    // ----------------------------------------------
    // 429
    // ----------------------------------------------

    if (status === 429) {
      /*
       * VERY IMPORTANT:
       *
       * POST / PUT / PATCH / DELETE ko automatic
       * retry nahi karna.
       *
       * Warna:
       *
       * - image duplicate upload
       * - post duplicate create
       * - duplicate delete/update
       *
       * ho sakta hai.
       */
      if (
        isSafeRetryMethod(
          config.method
        )
      ) {
        config.__retryCount =
          Number(
            config.__retryCount ||
              0
          );

        if (
          config.__retryCount <
          MAX_GET_RETRIES
        ) {
          config.__retryCount +=
            1;

          const delay =
            getRetryDelay(
              error,
              config.__retryCount
            );

          debugWarn(
            `⏳ Rate limited → retry ${config.__retryCount}/${MAX_GET_RETRIES} in ${delay}ms → ${method} ${url}`
          );

          await sleep(
            delay
          );

          return api(config);
        }
      }

      debugError(
        `❌ Rate limit reached → ${method} ${url}`
      );
    }

    // ----------------------------------------------
    // GOOGLE DRIVE AUTH
    // ----------------------------------------------

    if (
      status === 503 &&
      error?.response?.data
        ?.code ===
        "GOOGLE_DRIVE_AUTH_REQUIRED"
    ) {
      debugError(
        "❌ Google Drive authorization needs renewal."
      );

      error.message =
        error?.response?.data
          ?.message ||
        "Google Drive needs to be reconnected.";
    }

    // ----------------------------------------------
    // SERVER ERRORS
    // ----------------------------------------------

    if (
      status >= 500 &&
      status !== 503
    ) {
      debugError(
        `❌ Server error ${status} → ${method} ${url}`,
        error.response?.data
      );
    }

    // ----------------------------------------------
    // CLEAN USER-FACING MESSAGE
    // ----------------------------------------------

    if (
      error?.response?.data
        ?.message
    ) {
      error.message =
        error.response.data.message;
    } else if (
      Array.isArray(
        error?.response?.data
          ?.errors
      ) &&
      error.response.data.errors
        .length > 0
    ) {
      error.message =
        error.response.data.errors
          .map(
            (item) =>
              item?.msg ||
              item?.message
          )
          .filter(Boolean)
          .join(", ") ||
        error.message;
    }

    return Promise.reject(
      error
    );
  }
);

// ======================================================
// EXPORTED HELPERS
// ======================================================

export const getApiBaseUrl =
  () => API_URL;

export const getStoredAuthToken =
  () => getAuthToken();

// ======================================================
// EXPORT
// ======================================================

export default api;