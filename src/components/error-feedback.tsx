import clsx from 'clsx'
import Button from './button'
import { MaterialSymbolsLightErrorOutline } from './icons'

interface ErrorFeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  onRetry?: () => void
}

export default function ErrorFeedback(props: ErrorFeedbackProps) {
  const {
    className,
    style,
    children,
    onRetry,
    title = 'loading...',
    ...rest
  } = props

  function handleClick() {
    onRetry?.()
  }
  return (
    <div
      className={clsx('size-full flex items-center justify-center flex-col', className)}
      style={
        style
      }
      {
        ...rest
      }
    >
      <MaterialSymbolsLightErrorOutline color="#087ea4" fontSize={50} />
      {
        children || (
          <>
            <p className="mt-4 font-bold text-primary">{title}</p>
            <Button onClick={handleClick} className="mt-4">重试</Button>
          </>
        )
      }

    </div>
  )
}
