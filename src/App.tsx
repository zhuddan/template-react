import { lazy } from 'react'
import { Provider as QueryProvider } from './state/query'

const RouterRoot = lazy(() => import('./router'))
function App() {
  return (
    <QueryProvider>
      <RouterRoot />
    </QueryProvider>
  )
}

export default App
