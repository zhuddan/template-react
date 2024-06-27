import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
  ],
})
