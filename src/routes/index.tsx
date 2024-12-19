import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PendingFeedback from '~/components/pending-feedback'
import { sleep } from '~/utils/sleep'

async function delayForDemo<T>(promise: Promise<T>, t = 2000) {
  await sleep(t)
  return promise
}

const Layout = lazy(() => import('~/layout'))
const About = lazy(() => delayForDemo(import('~/pages/about'), 1000))
const Home = lazy(() => import('~/pages/home'))
const Zustand = lazy(() => import('~/pages/libs/zustand'))

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
        path: '/about',
        element: (
          <SuspenseWrapper>
            <About />
          </SuspenseWrapper>
        ),
      },
      {
        path: '/libs',
        children: [
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
