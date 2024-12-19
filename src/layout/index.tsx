import { Outlet } from 'react-router-dom'
import NavBar from './nav-bar'

export default function Layout() {
  // const startTime = performance.now()
  // while (performance.now() - startTime < 500) {
  //   // 在 500 毫秒内不执行任何操作以模拟极慢的代码
  // }
  return (
    <main>
      <NavBar />
      <section
        className="mt-14"
        style={{
          height: 'var(--content-height)',
        }}
      >
        <Outlet />
      </section>
    </main>
  )
}
