import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = import.meta.env.VITE_DEPLOY_ENV === 'github' ? '/ate-micr/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
