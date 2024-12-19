import { http } from 'msw'
import { API_URLS } from '~/constants/urls'
import { products } from '../data/product'
import { createResponseResultData } from '../utils'

export default [
  http.get(API_URLS.PRODUCT_LIST, () => {
    return createResponseResultData(products)
  }),
]
