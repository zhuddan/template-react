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
    <PageWrapper>
      <div className="overflow-hidden">
        <h1 className="m-4 text-xl ">
          <a
            className="hover:cursor-pointer hover:text-primary flex  items-center"
            href={item.href}
            title={item.href}
            target="_blank"
          >
            {item.title}

            <LineMdLink className="text-sm"></LineMdLink>
          </a>
        </h1>
      </div>

      <div className="border rounded-md p-2 m-2 flex items-center">
        {children}
      </div>
    </PageWrapper>
  )
}

export function ReactQueryPage({
  children,
}: {
  children: ReactNode
}) {
  return (
    <ReferencePage reference={reference[1]}>
      {children}
    </ReferencePage>
  )
}
