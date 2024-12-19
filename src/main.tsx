import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { worker } from './mocks/browser'

import './tailwind.css'

// 开发环境下启动 MSW
if (import.meta.env.MODE === 'development') {
  worker.start()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
