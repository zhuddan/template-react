import Button from '../components/button'
import Page from '../layout/pages'
import { useAppStore } from '../state/app'

export default function Home() {
  const { increase } = useAppStore()
  return (
    <Page>
      <Button onClick={increase}>
        increase
      </Button>
      <h2 className="text-3xl mt-10">this is home page</h2>
    </Page>
  )
}
