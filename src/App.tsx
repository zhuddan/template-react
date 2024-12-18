import { RootRooter } from './router'
import { Provider as BaseProvider } from './state/base'
import { Provider as QueryProvider } from './state/query'

function App() {
  return (
    <QueryProvider>
      <BaseProvider>
        <RootRooter />
      </BaseProvider>
    </QueryProvider>
  )
}

export default App
