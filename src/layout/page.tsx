import type { ReactNode } from 'react'
import type { Reference } from '~/utils/reference'
import clsx from 'clsx'
import { LineMdLink } from '~/components/icons'

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function PageWrapper(props: PageWrapperProps) {
  const {
    className,
    children,
    ...rest
  } = props
  return (
    <div
      className={clsx('container size-full mx-auto', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export function ReferencePage({
  reference: item,
  children,
}: {
  reference: Reference
  children: ReactNode
}) {
  return (
    <PageWrapper className="py-4">
      <h1>
        <a
          className="ml-2 hover:cursor-pointer hover:text-primary flex text-lg items-center"
          href={item.href}
          title={item.href}
          target="_blank"
        >
          {item.title}
          <LineMdLink className="text-sm"></LineMdLink>
        </a>
      </h1>
      {children}
    </PageWrapper>
  )
}
