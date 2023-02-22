import { Outlet } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import { NavBar } from './NavBar'

export const MainApp = () => {
  return (
    <UserProvider>
      <NavBar />
      <hr />
      <Outlet />
    </UserProvider>
  )
}
