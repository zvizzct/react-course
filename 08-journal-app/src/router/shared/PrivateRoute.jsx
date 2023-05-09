import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
  const { status } = useSelector((state) => state.auth)

  if (status === 'not-authenticated') {
    return <Navigate to="/auth/login" />
  }

  return <Outlet />
}
