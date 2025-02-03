import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/nexlab/' : '/ate-micr/',  // ✅ Automatically select base path
  plugins: [react()],
  server: {
    open: true,
    port: 3001,
    host: true,
  },
}));