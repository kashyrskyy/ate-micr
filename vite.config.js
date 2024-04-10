import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: import.meta.env.VITE_DEPLOY_ENV === 'github' ? '/ate-micr/' : '/',
  plugins: [react()],
})
