import { createContext, useEffect, useState } from "react";
import authService from "../services/authService";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(authService.getCurrentUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  // Login
  const login = async (email, password) => {
    const data = await authService.login(email, password);

    const token =
      data?.token ||
      data?.accessToken ||
      data?.data?.token;

    const loggedInUser =
      data?.user ||
      data?.data?.user;

    if (!token) {
      throw new Error(
        "Login successful but token was not received."
      );
    }

    // Save token
    localStorage.setItem("adminToken", token);

    // Save admin user
    if (loggedInUser) {
      localStorage.setItem(
        "adminUser",
        JSON.stringify(loggedInUser)
      );
    }

    // Update React state
    setUser(loggedInUser || null);

    return data;
  };

  // Logout
  const logout = () => {
    authService.logout();

    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    setUser(null);
  };

  // Check authentication
  const isAuthenticated = Boolean(
    localStorage.getItem("adminToken")
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;