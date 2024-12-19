import { useQuery } from '@tanstack/react-query'
import { getProductDetail, getProductList } from '~/api/product'
import { API_URLS } from '~/constants/urls'
import { sleep } from '~/utils/sleep'

export function useProductList() {
  return useQuery({
    queryKey: [API_URLS.PRODUCT_LIST],
    queryFn: async () => {
      await sleep(500)
      return getProductList()
    },
    select: response => response.data,
  })
}

export function useProductDetail(id?: number) {
  return useQuery({
    queryKey: [API_URLS.PRODUCT_DETAIL, id],
    queryFn: async () => {
      await sleep(500)
      return getProductDetail(id!)
    },
    select: response => response.data,
    enabled: !!id,
  })
}
