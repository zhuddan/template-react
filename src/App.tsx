import RootRouter from './routes'
import { Provider as QueryProvider } from './state/query'

function App() {
  return (
    <QueryProvider>
      <RootRouter />
    </QueryProvider>
  )
}

export default App
