import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import AuthContextProvider from "./context/AuthContext";

import "./index.css";
import "./App.css";

// ======================================================
// ROOT ELEMENT
// ======================================================

const rootElement =
  document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element with id="root" was not found.'
  );
}

// ======================================================
// REACT ROOT
// ======================================================

const root =
  ReactDOM.createRoot(rootElement);

// ======================================================
// APP
// ======================================================
//
// Provider order:
//
// HelmetProvider
//   └── AuthContextProvider
//         └── App
//
// IMPORTANT:
//
// React.StrictMode intentionally removed.
//
// Development mode mein StrictMode useEffect ko
// extra run kar sakta hai, jis se:
//
// - duplicate API requests
// - duplicate /auth/me requests
// - blog views double increment
// - confusing console logs
//
// nazar aa sakte hain.
//
// ======================================================

root.render(
  <HelmetProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </HelmetProvider>
);