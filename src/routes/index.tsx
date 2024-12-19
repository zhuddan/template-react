import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '../layout'
import About from '../pages/about'
import { Detail } from '../pages/detail'
import Home from '../pages/home'
import { List } from '../pages/list'

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
      {
        path: '/list',
        element: <List />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
      },
    ],
  },
], {
  future: {
  },
})

export function RootRooter() {
  return <RouterProvider router={router} />
}
