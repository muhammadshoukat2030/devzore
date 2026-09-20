import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

const routes = [
  '/',
  '/about',
  '/contact',
  '/blog',
  '/allservices',

  // Services
  '/web-development',
  '/mobile-apps',
  '/ecommerce',
  '/backend-api',
  '/mern-stack-development',
  '/saas-product-development',
  '/reactdevelopment',
  '/ui-ux-design',
  '/startup-mvp',
  '/maintenance',
  '/seo-services',
  '/digital-marketing',

  // Legal
  '/privacy-policy',
  '/terms-and-conditions',
];

export default defineConfig({
  plugins: [
    react(),

    sitemap({
      hostname: 'https://devzore.com',
      dynamicRoutes: routes,

      // Avoid unnecessary sitemap fields such as
      // priority/changefreq being applied globally.
      readable: true,
    }),
  ],

  build: {
    sourcemap: false,
  },
});