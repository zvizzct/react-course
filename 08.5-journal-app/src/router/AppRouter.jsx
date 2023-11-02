import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { PublicRoute } from './shared/PublicRoute'
import { PrivateRoute } from './shared/PrivateRoute'
import { ChildJournalRoutes } from '../journal/routes/childJournalRoutes'
import { ChildAuthRoutes } from '../auth/routes/childAuthRoutes'
import { CheckingAuth } from '../ui'
import { useCheckAuth } from '../hooks'

const routesConfig = createBrowserRouter([
  {
    path: '/auth/',
    element: <PublicRoute />,
    children: ChildAuthRoutes
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: ChildJournalRoutes
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />
  }
])

export const AppRouter = () => {
  const status = useCheckAuth()
  if (status === 'checking') {
    return <CheckingAuth />
  }
  return <RouterProvider router={routesConfig} />
}
