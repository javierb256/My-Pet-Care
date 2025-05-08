import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/",
  // base: "/my-pet-care",
  // base: process.env.VITE_BASE_PATH || "/My-Pet-Care",
  // base: import.meta.env.VITE_BASE_PATH || "/My-Pet-Care",
})
