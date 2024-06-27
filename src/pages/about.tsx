import Button from '../components/Button'
import Page from '../layout/pages'
import { useAppStore } from '../store/app'

export default function Home() {
  const { reduce } = useAppStore()
  return (
    <Page>
      <Button onClick={reduce}>
        reduce
      </Button>
      <h2 className="text-3xl mt-10">this is home page</h2>
    </Page>
  )
}
