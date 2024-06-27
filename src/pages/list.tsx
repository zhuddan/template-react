import { fakerZH_CN as faker } from '@faker-js/faker'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import ReactLoading from 'react-loading'
import { random } from 'lodash-es'
import { sleep } from '../utils/sleep'
import Button from '../components/Button'
import MdiEmoticonSadOutline from '~icons/mdi/emoticon-sad-outline'

async function getList() {
  await sleep(100)
  return new Promise<AppNamespace.ListItem[]>((resolve) => {
    const randomNumber = random(1, 10)

    if (randomNumber >= 3) {
      throw new Error('bad request')
    }

    const data = Array.from({
      length: 50,
    }).map((_, index) => {
      const item: AppNamespace.ListItem = {
        cover: faker.image.urlLoremFlickr({ category: 'food' }),
        title: faker.commerce.product(),
        subtitle: faker.commerce.productDescription(),
        time: faker.date.birthdate().toLocaleDateString().replace(/\//g, '-'),
        id: index,
      }
      return item
    })
    resolve(data)
  })
}

function Loading() {
  return (
    <div
      className="w-full h-52 flex items-center justify-center flex-col"
      style={{
        height: 'var(--content-height)',
      }}
    >
      <ReactLoading
        color="#087ea4"
        type="spin"
      />
      <p className="mt-4 font-bold text-primary">Loading...</p>
    </div>
  )
}

function ErrorMessage({ msg, onClick }: {
  msg?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <div
      className="w-full h-52 flex items-center justify-center flex-col"
      style={{
        height: 'var(--content-height)',
      }}
    >
      <MdiEmoticonSadOutline color="#087ea4" fontSize={50} />
      <p className="mt-4 font-bold text-primary">{msg}</p>
      <Button onClick={onClick} className="mt-4">try again</Button>
    </div>
  )
}

export function List() {
  const { data: list, isLoading, isError, error } = useQuery({
    queryKey: ['list'],
    queryFn: async () => await getList(),
  })
  const QueryClient = useQueryClient()

  return (
    <ul className="overflow-hidden">
      {
        isLoading
          ? <Loading />
          : isError
            ? (
              <ErrorMessage
                onClick={() => QueryClient.prefetchQuery({
                  queryKey: ['list'],
                })}
                msg={error.message}
              />
              )
            : list?.map((item) => {
              return (
                <li
                  key={item.id}
                  className="grid gap-x-2 m-4 shadow rounded-sm overflow-hidden"
                  style={{
                    gridTemplateColumns: '5rem 1fr auto',
                  }}
                >
                  <LazyLoadImage
                    className="size-20 rounded row-span-2 object-cover"
                    src={item.cover}
                  />
                  <h2 className="col-start-2 font-bold  ">{item.title}</h2>
                  <p className="col-start-2 text-sm line-clamp-2 h-10">{item.subtitle}</p>
                </li>
              )
            })
      }
    </ul>
  )
}
