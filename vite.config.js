import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Providing a default value if VITE_DEPLOY_ENV is not set
const deployEnv = import.meta.env.VITE_DEPLOY_ENV || 'default';
console.log('Deploy Environment:', deployEnv);

const base = deployEnv === 'github' ? '/ate-micr/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
