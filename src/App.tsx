import { RouterView } from './router'
import { Provider as QueryProvider } from './state/query'

function App() {
  return (
    <QueryProvider>
      <RouterView />
      <div className="bg-red-100 btnxxxxxxxx"></div>
    </QueryProvider>
  )
}

export default App
