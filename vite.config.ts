import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

const alias = {
  '@': path.resolve(__dirname, 'src'),
}


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    port: 7000,
  },
  resolve: {
    alias,
  },
})
