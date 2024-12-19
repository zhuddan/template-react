import ErrorFeedback from '~/components/error-feedback'
import PendingFeedback from '~/components/pending-feedback'
import ProductItem from '~/components/product-item'
import { ReferencePage } from '~/layout/page'
import { useProductList } from '~/state/queries/product'
import links from '~/utils/reference'

export default function Page() {
  const item = links[1]
  const { data, isPending, isError, refetch } = useProductList()
  return (
    <ReferencePage reference={item}>
      {
        isPending
          ? <PendingFeedback title="Load product list" />
          : isError
            ? <ErrorFeedback onRetry={refetch} />
            : (
                <ul>
                  {
                    data?.map((item) => {
                      return <ProductItem key={item.id} data={item} />
                    })
                  }
                </ul>
              )
      }

    </ReferencePage>
  )
}
