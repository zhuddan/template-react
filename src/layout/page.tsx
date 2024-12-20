import type { ReactNode } from 'react'
import type { Reference } from '~/utils/reference'
import clsx from 'clsx'
import { LineMdLink } from '~/components/icons'
import reference from '~/utils/reference'

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function PageWrapper(props: PageWrapperProps) {
  const {
    className,
    children,
    ...rest
  } = props
  return (
    <div
      className={clsx('container size-full mx-auto p-4', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
