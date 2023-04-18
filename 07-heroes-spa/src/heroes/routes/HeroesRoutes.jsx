import { Outlet } from 'react-router-dom'

import { Navbar } from '../../ui/components'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
