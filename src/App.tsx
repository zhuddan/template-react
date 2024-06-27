import { RouterView } from './router'
import { Provider as QueryProvider } from './state/query'

function App() {
  return (
    <QueryProvider>
      <RouterView />
    </QueryProvider>
  )
}

export default App
