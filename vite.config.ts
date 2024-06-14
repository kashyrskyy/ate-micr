import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Provides a default value for local development
const deployEnv = process.env.VITE_DEPLOY_ENV ?? 'local';

// https://vitejs.dev/config/
export default defineConfig({
  base: deployEnv === 'github' ? '/ate-micr/' : '/',
  plugins: [react()],
  server: {
    open: true,
    port: 3001,
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
})
