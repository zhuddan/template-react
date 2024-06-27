import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryCache = new QueryCache({
  onError(e) {
    console.log(e)
  },
})
const mutationCache = new MutationCache({
  onError(e) {
    console.log(e)
  },
})

const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
})
export function Provider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
