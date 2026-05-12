import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),

    // 🌍 Sitemap (SAFE + WORKING)
    sitemap({
      hostname: 'https://devzore.com',
      routes: [
        '/',
        '/about',
        '/contact',
        '/blog',
        '/allservices',
        '/web-development',
        '/mobile-apps',
        '/ecommerce',
        '/backend-api',
        '/mern-stack-development',
        '/saas-product-development',
        '/reactdevelopment',
        '/ui-ux-design',
        '/maintenance',
        '/startup-mvp',
        '/privacy-policy',
        '/terms-and-conditions'
      ]
    })
  ]
})