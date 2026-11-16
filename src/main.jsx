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

// ======================================================
// GOOGLE ANALYTICS 4 (CONDITIONAL)
// ======================================================
// [OWNER INPUT NEEDED: Add VITE_GA_ID=G-XXXXXXXXXX in frontend/.env to activate analytics]
const gaId = import.meta.env.VITE_GA_ID;
if (typeof window !== "undefined" && gaId && String(gaId).trim()) {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId.trim()}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", gaId.trim());
}

root.render(
  <HelmetProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </HelmetProvider>
);