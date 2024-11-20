import { Link, useLocation } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import { useAppStore } from '../state/app'

const menu: {
  path: string
  title: string
}[] = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/list',
    title: 'List',
  },
]
export default function NavBar() {
  const { pathname } = useLocation()
  const { count } = useAppStore()
  return (
    <nav
      className="shadow bg-white flex items-center px-4 fixed top-0 left-0 right-0"
      style={{
        height: 'var(--nav-bar-height)',
      }}
    >
      <h1>
        <Link to="/">
          <img src={reactLogo} alt="" />
          <div className="flex-1"></div>
        </Link>
      </h1>
      <div className="flex-1 text-center text-bold">
      </div>
      <ul className="menu flex items-center">
        {
          menu.map(item => (
            <li
              className={`ml-2 ${pathname === item.path ? 'text-primary' : ''}`}
              key={item.path}
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))
        }
        <li className="ml-2 bg-primary text-white rounded-full size-8 flex items-center justify-center">
          {count}
        </li>
      </ul>
    </nav>
  )
}
