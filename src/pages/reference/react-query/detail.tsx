import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ErrorFeedback from '~/components/error-feedback'
import PendingFeedback from '~/components/pending-feedback'
import ProductItem from '~/components/product-item'
import { ReferencePage } from '~/layout/page'
import { useProductDetail } from '~/state/queries/product'
import links from '~/utils/reference'

export default function Page() {
  const item = links[1]
  const [searchParams] = useSearchParams()
  const id = useMemo(() => {
    const id = Number(searchParams.get('id'))
    return Number.isNaN(id) ? undefined : id
  }, [searchParams])
  const { data, isPending, isError, refetch } = useProductDetail(id)
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
                    JSON.stringify(data)
                  }
                </ul>
              )
      }

    </ReferencePage>
  )
}
