import clsx from 'clsx'
import { IconLoading } from './icons'

interface PendingFeedbackProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function PendingFeedback(props: PendingFeedbackProps) {
  const {
    className,
    style,
    children,
    ...rest
  } = props
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
      <IconLoading
        color="#087ea4"
        className="animate-spin"
      />
      {
        children || <p className="mt-4 font-bold text-primary">loading...</p>
      }
    </div>
  )
}