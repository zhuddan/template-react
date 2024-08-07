import { defineConfig, loadEnv } from 'vite'
import React from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './')
  return {
    plugins: [
      React(),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
      }),
    ],
    server: {
      port: Number(env.VITE_APP_PORT),
      host: true,
    },
  }
})
