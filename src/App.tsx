import { Suspense } from 'react'
import RootRooter from './routes'
import { Provider as QueryProvider } from './state/query'

function App() {
  return (
    <QueryProvider>
      <Suspense fallback="loading">
        <RootRooter />
      </Suspense>
    </QueryProvider>
  )
}

export default App
