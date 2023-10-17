import { Outlet } from 'react-router-dom'
export const JournalRoutes = () => {
  return (
    <>
      <div className="container mt-2">
        <Outlet />
      </div>
    </>
  )
}
