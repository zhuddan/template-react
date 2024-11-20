import { RouterView } from './router'
import { Provider as QueryProvider } from './state/query'
import { Provider as AuthProvider } from './state/store'

function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <RouterView />
      </AuthProvider>
    </QueryProvider>
  )
}

export default App
