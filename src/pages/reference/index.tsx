import { Link } from 'react-router-dom'
import { LineMdLink } from '~/components/icons'
import PageWrapper from '~/layout/page'
import links from '~/utils/reference'

export default function Home() {
  return (
    <PageWrapper className="flex justify-center flex-col items-center">
      <ul className="w-[200px] flex flex-col items-center">
        {
          links.map((item) => {
            return (
              <li key={item.to} className="flex text-lg items-center px-2">
                <Link to={item.to} className=" hover:text-primary hover:underline">
                  {item.title}
                </Link>
                <a
                  className="ml-2 hover:cursor-pointer hover:text-primary"
                  href={item.href}
                  title={item.href}
                  target="_blank"
                >
                  <LineMdLink className="text-sm">
                  </LineMdLink>
                </a>
              </li>
            )
          })
        }
      </ul>
    </PageWrapper>
  )
}
