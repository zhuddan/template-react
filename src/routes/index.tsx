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
const ReactQuery = lazy(() => import('~/pages/reference/react-query'))
const ReactQueryList = lazy(() => import('~/pages/reference/react-query/list'))
const ReactQueryDetail = lazy(() => import('~/pages/reference/react-query/detail'))
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
    <Suspense fallback={(<PendingFeedback className={className} />)}>
      {children}
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SuspenseWrapper className="h-screen">
        <Layout />
      </SuspenseWrapper>
    ),
    errorElement: <div>Something went wrong</div>,
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
          {
            path: 'react-query',
            children: [
              {
                index: true,
                element: (
                  <SuspenseWrapper>
                    <ReactQuery />
                  </SuspenseWrapper>
                ),
              },
              {
                path: 'list',
                element: (
                  <SuspenseWrapper>
                    <ReactQueryList />
                  </SuspenseWrapper>
                ),
              },
              {
                path: 'detai0l/:id',
                element: (
                  <SuspenseWrapper>
                    <ReactQueryDetail />
                  </SuspenseWrapper>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <div>Page Not Found</div>,
  },
], {
  future: {
  },
})

export default function RootRouter() {
  return (
    <RouterProvider router={router} />
  )
}
