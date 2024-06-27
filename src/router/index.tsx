import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import { Layout } from '../layout'
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
    ],
  },

])

export function RouterView() {
  return <RouterProvider router={router} />
}