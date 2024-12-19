import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from '~/pages/about'
import Home from '~/pages/home'

const Layout = lazy(() => import('~/layout'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
