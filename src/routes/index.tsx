import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PendingFeedback from '~/components/pending-feedback'

function delayForDemo<T>(promise: Promise<T>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  }).then(() => promise)
}

const About = lazy(() => delayForDemo(import('~/pages/about')))
const Home = lazy(() => delayForDemo(import('~/pages/home')))
const Layout = lazy(() => delayForDemo(import('~/layout')))

function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<PendingFeedback />}>
      {children}
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SuspenseWrapper>
        <Layout />
      </SuspenseWrapper>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
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
