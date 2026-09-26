import api from "./api";
import cookieManager from "../utils/cookieManager";

// ======================================================
// AUTH STORAGE KEYS
// ======================================================

const TOKEN_KEY = "adminToken";
const USER_KEY = "adminUser";

// ======================================================
// SAVE TOKEN
// ======================================================
// Token ko cookie + localStorage dono mein save karte hain.
//
// localStorage:
// Axios interceptor reliably token read kar sake.
//
// Cookie:
// Existing authentication setup ke saath compatibility.
// ======================================================

const saveToken = (token) => {
  if (!token || typeof token !== "string") {
    throw new Error("Invalid authentication token.");
  }

  const cleanToken = token.trim();

  // Save in cookie
  cookieManager.setCookie(TOKEN_KEY, cleanToken, 7);

  // IMPORTANT:
  // Always save in localStorage as well.
  localStorage.setItem(TOKEN_KEY, cleanToken);

  // Verify
  const localToken = localStorage.getItem(TOKEN_KEY);
  const cookieToken = cookieManager.getCookie(TOKEN_KEY);

  console.log("=================================");
  console.log("🔐 AUTH TOKEN STORAGE");
  console.log("LocalStorage token:", Boolean(localToken));
  console.log("Cookie token:", Boolean(cookieToken));
  console.log("=================================");

  return cleanToken;
};

// ======================================================
// SAVE USER
// ======================================================

const saveUser = (user) => {
  if (!user) {
    return;
  }

  localStorage.setItem(
    USER_KEY,
    JSON.stringify(user)
  );
};

// ======================================================
// LOGIN
// POST /api/auth/login
// ======================================================

const login = async (email, password) => {
  try {
    // -----------------------------------------------
    // Validate input
    // -----------------------------------------------

    if (!email || !password) {
      throw new Error(
        "Email and password are required."
      );
    }

    // -----------------------------------------------
    // Login request
    // -----------------------------------------------

    const response = await api.post(
      "/auth/login",
      {
        email: email.trim().toLowerCase(),
        password,
      }
    );

    const data = response.data;

    // -----------------------------------------------
    // Extract token
    // -----------------------------------------------

    const token =
      data?.token ||
      data?.accessToken ||
      data?.data?.token ||
      data?.data?.accessToken;

    // -----------------------------------------------
    // Extract user
    // -----------------------------------------------

    const user =
      data?.user ||
      data?.data?.user ||
      null;

    // -----------------------------------------------
    // Token required
    // -----------------------------------------------

    if (!token) {
      console.error(
        "❌ Login response:",
        data
      );

      throw new Error(
        "Login successful, but authentication token was not received."
      );
    }

    // -----------------------------------------------
    // Save token
    // -----------------------------------------------

    const savedToken = saveToken(token);

    // -----------------------------------------------
    // Save user
    // -----------------------------------------------

    if (user) {
      saveUser(user);
    }

    console.log("=================================");
    console.log("✅ ADMIN LOGIN SUCCESSFUL");
    console.log("Token saved:", Boolean(savedToken));
    console.log("User:", user?.email || "available");
    console.log("=================================");

    return {
      ...data,
      token: savedToken,
      user,
    };

  } catch (error) {
    console.error(
      "❌ Login Error:",
      error.response?.data ||
        error.message
    );

    throw error;
  }
};

// ======================================================
// GET TOKEN
// ======================================================
//
// IMPORTANT:
// localStorage FIRST.
//
// Is se Axios request interceptor aur authService
// same token source reliably use karenge.
// ======================================================

const getToken = () => {
  try {
    const localToken =
      localStorage.getItem(TOKEN_KEY);

    if (localToken) {
      return localToken.trim();
    }

    const cookieToken =
      cookieManager.getCookie(TOKEN_KEY);

    if (cookieToken) {
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
// GET CURRENT USER FROM BACKEND
// GET /api/auth/me
// ======================================================

const getMe = async () => {
  try {
    const token = getToken();

    if (!token) {
      console.warn(
        "⚠️ getMe skipped: No authentication token."
      );

      return null;
    }

    const response =
      await api.get("/auth/me");

    const data = response.data;

    const user =
      data?.user ||
      data?.data?.user ||
      null;

    if (!user) {
      throw new Error(
        "Authentication verified but user data was not received."
      );
    }

    // Keep local user updated
    saveUser(user);

    return user;

  } catch (error) {
    console.error(
      "❌ Get Current User Error:",
      error.response?.data ||
        error.message
    );

    if (error.response?.status === 401) {
      clearAuth();
    }

    throw error;
  }
};

// ======================================================
// GET CURRENT USER FROM LOCAL STORAGE
// ======================================================

const getCurrentUser = () => {
  try {
    const storedUser =
      localStorage.getItem(USER_KEY);

    if (!storedUser) {
      return null;
    }

    return JSON.parse(storedUser);

  } catch (error) {
    console.error(
      "❌ Failed to read stored admin user:",
      error
    );

    localStorage.removeItem(USER_KEY);

    return null;
  }
};

// ======================================================
// CHECK AUTHENTICATION
// ======================================================

const isAuthenticated = () => {
  return Boolean(getToken());
};

// ======================================================
// CLEAR AUTHENTICATION
// ======================================================

const clearAuth = () => {
  try {
    // Cookie
    cookieManager.deleteCookie(TOKEN_KEY);

    // LocalStorage
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);

    console.log(
      "🔓 Authentication data cleared."
    );

  } catch (error) {
    console.error(
      "❌ Failed to clear authentication:",
      error
    );
  }
};

// ======================================================
// LOGOUT
// ======================================================

const logout = () => {
  clearAuth();
};

// ======================================================
// EXPORT
// ======================================================

export default {
  login,
  logout,
  getMe,
  getToken,
  getCurrentUser,
  isAuthenticated,
  clearAuth,
};