// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/_variables.scss";',
        silenceDeprecations: ['color-functions', 'import', 'global-builtin'],
        quietDeps: true, // suppresses deprecation warnings from node_modules dependencies specifically
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})