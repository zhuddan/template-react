// import { RootRooter } from './routes'
import { lazy, Suspense } from 'react'
import { Provider as QueryProvider } from './state/query'

function delayForDemo<T>(promise: Promise<T>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  }).then(() => promise)
}

const RootRooter = lazy(() => delayForDemo(import('~/routes')))

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
