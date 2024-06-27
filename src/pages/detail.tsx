import { useQueries, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LIST_DATA } from '../data'
import { sleep } from '../utils/sleep'
import 'swiper/css'

async function getDetail(id: string) {
  await sleep()
  return LIST_DATA.find(item => item.id === Number(id))
}

export function Detail() {
  const { id } = useParams()

  const { data, loading } = useQuery({
    queryKey: ['detail', id],
    queryFn: () => getDetail(id!),
  })

  return (
    <div
      style={{
        height: 'var(--content-height)',
      }}
    >
      <Swiper
        spaceBetween={50}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {
          data?.images.map(({ url, id }) => (
            <SwiperSlide key={id}>
              <img src={url}></img>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <p>{data?.title}</p>
    </div>
  )
}
