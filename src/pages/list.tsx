import { useQuery } from '@tanstack/react-query'
import LoadingView from '../components/loading-view'
import { ErrorView } from '../components/error-view'
import { getList } from '../server'
import { ListItem } from '../components/list-item'

export function List() {
  const { data: list, isLoading, isError, error } = useQuery({
    queryKey: ['list'],
    queryFn: async () => await getList(),
  })

  return (
    <ul className="overflow-hidden">
      {
        isLoading
          ? <LoadingView />
          : isError
            ? <ErrorView queryKey={['list']} msg={error.message} />
            : list?.map(item => <ListItem data={item} key={item.id} />)
      }
    </ul>
  )
}
