import type { QueryKey } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'

import MdiEmoticonSadOutline from '~icons/mdi/emoticon-sad-outline'
import Button from './button'

export function ErrorView({ msg, queryKey }: {
  msg?: string
  queryKey?: QueryKey
}) {
  const QueryClient = useQueryClient()
  function handleClick() {
    if (!queryKey)
      return
    QueryClient.prefetchQuery({
      queryKey,
    })
  }
  return (
    <div
      className="w-full h-52 flex items-center justify-center flex-col"
      style={{
        height: 'var(--content-height)',
      }}
    >
      <MdiEmoticonSadOutline color="#087ea4" fontSize={50} />
      <p className="mt-4 font-bold text-primary">{msg}</p>
      <Button onClick={handleClick} className="mt-4">try again</Button>
    </div>
  )
}
