import { getProductList } from '~/api/product'
import { ReferencePage } from '~/layout/page'
import links from '~/utils/reference'

export default function Page() {
  const item = links[1]
  getProductList()

  return (
    <ReferencePage reference={item}>
      1
    </ReferencePage>
  )
}
