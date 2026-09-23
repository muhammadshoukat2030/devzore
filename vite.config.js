import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

const routes = [
  "/",
  "/about",
  "/contact",
  "/blog",
  "/allservices",
  "/web-development",
  "/mobile-apps",
  "/ecommerce",
  "/backend-api",
  "/mern-stack-development",
  "/saas-product-development",
  "/reactdevelopment",
  "/ui-ux-design",
  "/startup-mvp",
  "/maintenance",
  "/seo-services",
  "/digital-marketing",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default defineConfig({
  plugins: [
    react(),

    sitemap({
      hostname: "https://devzore.com",
      dynamicRoutes: routes,
      readable: true,
    }),
  ],

  build: {
    sourcemap: false,
  },
});