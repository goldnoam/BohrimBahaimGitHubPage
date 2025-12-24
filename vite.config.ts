import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/BohrimBahaim/', // This tells Vite the site is in a subfolder
  plugins: [react()],
})
