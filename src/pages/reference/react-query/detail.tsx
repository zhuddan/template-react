import { useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ErrorFeedback from '~/components/error-feedback'
import PendingFeedback from '~/components/pending-feedback'
import { ReactQueryPage } from '~/layout/page'
import { useProductDetail } from '~/state/queries/product'

export default function Page() {
  const params = useParams()
  const id = useMemo(() => {
    const id = Number(params.id)
    return Number.isNaN(id) ? undefined : id
  }, [params])

  const { data, isPending, isError, refetch, error } = useProductDetail(id)
  return (
    <ReactQueryPage>
      {
        isPending
          ? <PendingFeedback title="Load product list" />
          : isError
            ? <ErrorFeedback onRetry={refetch} error={error} />
            : (
                <ul>
                  <pre>
                    <code className="text-wrap">
                      {
                        JSON.stringify(data, null, 2)
                      }
                    </code>
                  </pre>
                </ul>
              )
      }

    </ReactQueryPage>
  )
}
