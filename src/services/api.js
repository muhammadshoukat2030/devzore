import axios from "axios";
import cookieManager from "../utils/cookieManager";

// ======================================================
// API BASE URL
// ======================================================
//
// Local:
// http://localhost:5000/api
//
// Production:
// VITE_API_URL environment variable se aayega.
//
// ======================================================

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

// ======================================================
// AXIOS INSTANCE
// ======================================================

const api = axios.create({
  baseURL: API_URL,

  headers: {
    Accept: "application/json",
  },

  timeout: 15000,

  // Cookies ko cross-origin requests ke saath allow karta hai.
  withCredentials: true,
});

// ======================================================
// GET AUTH TOKEN
// ======================================================
//
// IMPORTANT:
//
// 1. Pehle localStorage check hoga.
// 2. Agar wahan token nahi mila to cookie check hogi.
//
// authService.js bhi adminToken isi naam se save karta hai.
//
// ======================================================

const getAuthToken = () => {
  try {
    // --------------------------------------------------
    // 1. LOCAL STORAGE - PRIMARY
    // --------------------------------------------------

    const localToken =
      localStorage.getItem("adminToken");

    if (
      localToken &&
      typeof localToken === "string" &&
      localToken.trim()
    ) {
      return localToken.trim();
    }

    // --------------------------------------------------
    // 2. COOKIE - FALLBACK
    // --------------------------------------------------

    const cookieToken =
      cookieManager.getCookie("adminToken");

    if (
      cookieToken &&
      typeof cookieToken === "string" &&
      cookieToken.trim()
    ) {
      return cookieToken.trim();
    }

    return null;
  } catch (error) {
    console.error(
      "❌ Failed to read authentication token:",
      error
    );

    return null;
  }
};

// ======================================================
// REQUEST INTERCEPTOR
// ======================================================
//
// Har API request se pehle:
//
// 1. adminToken read karega
// 2. Authorization header add karega
//
// Authorization: Bearer JWT_TOKEN
//
// ======================================================

api.interceptors.request.use(
  (config) => {
    // --------------------------------------------------
    // GET TOKEN
    // --------------------------------------------------

    const token = getAuthToken();

    // --------------------------------------------------
    // ATTACH JWT
    // --------------------------------------------------

    if (token) {
      config.headers =
        config.headers || {};

      config.headers.Authorization =
        `Bearer ${token}`;

      console.log(
        `🔐 JWT attached → ${
          config.method?.toUpperCase() || "REQUEST"
        } ${config.url}`
      );
    } else {
      console.warn(
        `⚠️ No JWT available → ${
          config.method?.toUpperCase() || "REQUEST"
        } ${config.url}`
      );
    }

    // ==================================================
    // FORM DATA / IMAGE UPLOAD
    // ==================================================
    //
    // FormData ke saath Content-Type manually set
    // nahi karna.
    //
    // Browser automatically:
    //
    // multipart/form-data; boundary=....
    //
    // generate karega.
    //
    // ==================================================

    if (
      typeof FormData !== "undefined" &&
      config.data instanceof FormData
    ) {
      // AxiosHeaders object
      if (
        config.headers &&
        typeof config.headers.delete === "function"
      ) {
        config.headers.delete("Content-Type");
      } else if (config.headers) {
        // Normal JS object fallback
        delete config.headers["Content-Type"];
        delete config.headers["content-type"];
      }

      console.log(
        `📦 FormData detected → ${
          config.method?.toUpperCase() || "REQUEST"
        } ${config.url}`
      );
    }

    return config;
  },

  (error) => {
    console.error(
      "❌ Request interceptor error:",
      error
    );

    return Promise.reject(error);
  }
);

// ======================================================
// RATE LIMIT RETRY STORAGE
// ======================================================

const retryCount = {};

// ======================================================
// RESPONSE INTERCEPTOR
// ======================================================

api.interceptors.response.use(
  // ----------------------------------------------------
  // SUCCESS RESPONSE
  // ----------------------------------------------------

  (response) => {
    return response;
  },

  // ----------------------------------------------------
  // ERROR RESPONSE
  // ----------------------------------------------------

  async (error) => {
    const status =
      error.response?.status;

    const config =
      error.config || {};

    const url =
      config.url || "unknown";

    const method =
      config.method?.toUpperCase() ||
      "REQUEST";

    // ==================================================
    // 401 - UNAUTHORIZED
    // ==================================================

    if (status === 401) {
      console.error(
        `❌ 401 Unauthorized → ${method} ${url}`
      );

      console.error(
        "Backend response:",
        error.response?.data
      );

      const token =
        getAuthToken();

      console.log(
        "JWT present in browser:",
        Boolean(token)
      );

      /*
       * IMPORTANT:
       *
       * Token ko yahan automatically delete nahi karte.
       *
       * Is se debugging ke waqt ek failed request
       * baqi admin session ko destroy nahi karegi.
       *
       * authService.getMe() invalid/expired token ko
       * separately handle kar sakta hai.
       */
    }

    // ==================================================
    // 403 - FORBIDDEN
    // ==================================================

    if (status === 403) {
      console.error(
        `❌ 403 Forbidden → ${method} ${url}`
      );

      console.error(
        "Backend response:",
        error.response?.data
      );
    }

    // ==================================================
    // 400 - BAD REQUEST
    // ==================================================

    if (status === 400) {
      console.error(
        `❌ 400 Bad Request → ${method} ${url}`
      );

      console.error(
        "Backend response:",
        error.response?.data
      );
    }

    // ==================================================
    // 413 - FILE TOO LARGE
    // ==================================================

    if (status === 413) {
      console.error(
        "❌ Upload rejected: file is too large."
      );
    }

    // ==================================================
    // 429 - RATE LIMIT
    // ==================================================

    if (status === 429) {
      retryCount[url] =
        (retryCount[url] || 0) + 1;

      // Maximum 2 retries
      if (retryCount[url] <= 2) {
        const delay =
          Math.pow(
            2,
            retryCount[url]
          ) * 1000;

        console.warn(
          `⏳ Rate limited → retry ${retryCount[url]}/2 in ${delay}ms`
        );

        await new Promise(
          (resolve) => {
            setTimeout(
              resolve,
              delay
            );
          }
        );

        return api(config);
      }

      retryCount[url] = 0;
    } else {
      // Successful/non-429 response path ke baad
      // retry counter reset.
      retryCount[url] = 0;
    }

    // ==================================================
    // NETWORK ERROR
    // ==================================================

    if (!error.response) {
      console.error(
        "❌ Network Error:",
        error.message
      );

      error.message =
        "Network error. Please check whether the backend server is running.";
    }

    // ==================================================
    // SERVER ERROR
    // ==================================================

    if (
      status &&
      status >= 500
    ) {
      console.error(
        `❌ Server Error ${status} → ${method} ${url}`,
        error.response?.data ||
          error.message
      );
    }

    return Promise.reject(error);
  }
);

// ======================================================
// EXPORT
// ======================================================

export default api;