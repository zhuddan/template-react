import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PendingFeedback from '~/components/pending-feedback'
import { sleep } from '~/utils/sleep'

async function delayForDemo<T>(promise: Promise<T>, t = 2000) {
  await sleep(t)
  return promise
}

const Layout = lazy(() => import('~/layout'))
const Home = lazy(() => import('~/pages/home'))
const Zustand = lazy(() => import('~/pages/reference/zustand'))
const Reference = lazy(() => delayForDemo(import('~/pages/reference'), 100))

function SuspenseWrapper({
  children,
  className,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <Suspense
      fallback={(
        <PendingFeedback
          className={className}
        />
      )}
    >
      {children}
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SuspenseWrapper className="h-[100vh]">
        <Layout />
      </SuspenseWrapper>
    ),
    children: [
      {
        path: '/',
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        ),
      },
      {
        path: '/reference',
        children: [
          {
            index: true,
            element: (
              <SuspenseWrapper>
                <Reference />
              </SuspenseWrapper>
            ),
          },
          {
            path: 'zustand',
            element: (
              <SuspenseWrapper>
                <Zustand />
              </SuspenseWrapper>
            ),
          },
        ],
      },
    ],
  },
], {
  future: {
  },
})

export default function RootRooter() {
  return <RouterProvider router={router} />
}
