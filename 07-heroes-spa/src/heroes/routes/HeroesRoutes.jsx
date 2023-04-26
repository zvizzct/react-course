import { Outlet, Navigate, useLocation } from 'react-router-dom'

import { Navbar } from '../../ui/components'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../auth/context/AuthContext'
import { AllHeroPage } from '../pages/AllHeroPage'

export const HeroesRoutes = () => {
  const { logged } = useContext(AuthContext)
  const { pathname, search } = useLocation()
  const lastPath = pathname + search
  useEffect(() => {
    localStorage.setItem('lastPath', lastPath)
  }, [lastPath])

  return logged ? (
    <>
      <Navbar />
      <div className="container mt-2">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  )
}
