import Button from '../components/button'
import PageWrapper from '../layout/page'
import { useAppStore } from '../state/app'

export default function Home() {
  const { reduce } = useAppStore()
  return (
    <PageWrapper>
      <Button onClick={reduce}>
        reduce
      </Button>
      <h2 className="text-3xl mt-10">this is home page</h2>
    </PageWrapper>
  )
}
