import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useQuery } from '@tanstack/react-query'
import { random } from 'lodash-es'
import { useNavigate } from 'react-router-dom'
import { sleep } from '../utils/sleep'
import { LIST_DATA } from '../data'
import LoadingView from '../components/loading-view'
import { ErrorView } from '../components/error-view'

async function getList() {
  await sleep(100)
  return new Promise<AppNamespace.ListItem[]>((resolve) => {
    const randomNumber = random(1, 10)

    if (randomNumber >= 9) {
      throw new Error('bad request')
    }

    resolve(LIST_DATA)
  })
}

export function ListItem({ data }: { data: AppNamespace.ListItem }) {
  const navigate = useNavigate()
  function handleClick() {
    navigate(`/detail/${data.id}`)
  }
  return (
    <li
      key={data.id}
      onClick={handleClick}
      className="grid gap-x-2 m-4 shadow rounded-sm overflow-hidden"
      style={{
        gridTemplateColumns: '5rem 1fr auto',
      }}
    >
      <LazyLoadImage
        className="size-20 rounded row-span-2 object-cover"
        src={data.cover}
      />
      <h2 className="col-start-2 font-bold  ">{data.title}</h2>
      <p className="col-start-2 text-sm line-clamp-2 h-10">{data.subtitle}</p>
    </li>
  )
}

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
            ? (
              <ErrorView
                queryKey={['list']}
                msg={error.message}
              />
              )
            : list?.map(item => <ListItem data={item} key={item.id} />)
      }
    </ul>
  )
}
