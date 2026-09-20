import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import AuthContextProvider from "./context/AuthContext";

import "./index.css";
import "./App.css";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </HelmetProvider>
  </React.StrictMode>
);