import { RootRooter } from './router'
import { Provider as QueryProvider } from './state/query'

function App() {
  return (
    <QueryProvider>
      <RootRooter />
    </QueryProvider>
  )
}

export default App
