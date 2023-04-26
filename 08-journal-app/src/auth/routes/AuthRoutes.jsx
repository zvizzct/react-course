import { Outlet } from 'react-router-dom'

export const AuthRoutes = () => {
  return (
    <>
      <div className="container mt-2">
        <Outlet />
      </div>
    </>
  )
}
