import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

function AppLayout() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
