import api from "./api";

const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};

const logout = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminUser");
};

const getCurrentUser = () => {
  const user = localStorage.getItem("adminUser");

  try {
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

const isAuthenticated = () => {
  return Boolean(localStorage.getItem("adminToken"));
};

export default {
  login,
  logout,
  getCurrentUser,
  isAuthenticated,
};