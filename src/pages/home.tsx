import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/button'
import Page from '../layout/pages'
import { useAppStore } from '../state/app'
import { decrement, increment, incrementAsync } from '../state/counterSlice'
import type { AppDispatch, RootState } from '../state/store'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default function Home() {
  const count = useAppSelector(state => state.counter.value)
  const status = useAppSelector(state => state.counter.status)
  const { increase } = useAppStore()
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Page>
      <Button onClick={increase}>
        increase
      </Button>
      <h2 className="text-3xl mt-10">this is home page</h2>

      <div className="flex justify-between items-center mt-4">
        <Button onClick={() => dispatch(decrement())}>
          -
        </Button>
        <span className="mx-5">
          {count}
          {'<==>'}
          {status}
        </span>

        <Button onClick={() => dispatch(incrementAsync(5))}>
          +
        </Button>
      </div>

      <Bar />
    </Page>
  )
}

function Bar() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="flex justify-between items-center mt-4">
      <Button onClick={() => dispatch(decrement())}>
        -
      </Button>
      <span className="mx-5">
        {count}
      </span>
      <Button onClick={() => dispatch(increment())}>
        +
      </Button>
    </div>
  )
}
