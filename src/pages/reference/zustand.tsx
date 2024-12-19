import Button from '~/components/button'
import { ReferencePage } from '~/layout/page'
import { useAppStore } from '~/state/app'
import links from '~/utils/reference'

export default function Page() {
  const item = links[0]
  return (
    <ReferencePage reference={item}>
      <div className="border rounded-md mt-8 p-4 flex  items-center">
        <Reduce />
        <Result />
        <Increase />
      </div>
    </ReferencePage>
  )
}

function Result() {
  const count = useAppStore(state => state.count)
  return (
    <div className="mx-5 w-8 text-primary text-center font-bold">
      {count}
    </div>
  )
}

function Increase() {
  const increase = useAppStore(state => state.increase)
  return (
    <Button onClick={increase}>+</Button>
  )
}

function Reduce() {
  const reduce = useAppStore(state => state.reduce)
  return (
    <Button onClick={reduce}>-</Button>
  )
}
