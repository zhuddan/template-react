import { Link } from 'react-router-dom'
import { ReferencePage } from '~/layout/page'
import links from '~/utils/reference'

export default function Page() {
  const item = links[1]
  const queries = [
    {
      title: '列表',
      path: './list',
    },
  ]
  return (
    <ReferencePage reference={item}>
      <ul className="w-full px-4">
        {
          queries.map((e) => {
            return (
              <li className="list-disc hover:text-primary" key={e.path}>
                <Link to={e.path} className="block">
                  {e.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </ReferencePage>
  )
}
