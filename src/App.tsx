// import { RootRooter } from './routes'
import { lazy, Suspense } from 'react'
import { Provider as QueryProvider } from './state/query'

const RootRooter = lazy(() => import('~/routes'))

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
