import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LIST_DATA } from '../data'
import { sleep } from '../utils/sleep'
import LoadingView from '../components/loading-view'
import { ErrorView } from '../components/error-view'
import 'swiper/css'

async function getDetail(id: string) {
  await sleep(1000)
  return LIST_DATA.find(item => item.id === Number(id))
}

function DetailBanner({ data }: { data?: AppNamespace.ListItem }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{
        delay: 1000,
      }}
    >
      <div className="flex"></div>
      { data?.images.map(({ url, id }) => (
        <SwiperSlide key={id}>
          <img src={url}></img>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export function Detail() {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['detail', id],
    queryFn: () => getDetail(id!),
  })

  return (
    <div
      style={{
        height: 'var(--content-height)',
      }}
    >
      {
        isLoading
          ? <LoadingView />
          : isError
            ? <ErrorView msg={error.message} queryKey={['detail', id]} />
            : <DetailInfo data={data} />
      }
    </div>
  )
}

function DetailInfo({ data }: { data?: AppNamespace.ListItem }) {
  return (
    <>
      <DetailBanner data={data} />
      <div className="p-5">
        <h1 className="text-xl">{data?.title}</h1>
        <h1 className="text-base font-sans mt-3 line">{data?.subtitle}</h1>
        <h1 className="text-base font-sans mt-3 line">{data?.time}</h1>
      </div>
    </>
  )
}
