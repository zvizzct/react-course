import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { childAuthRoutes } from '../auth/routes/childAuthRoutes'
import { childJournalRoutes } from '../journal/routes/childJournalRoutes'
import { ErrorPage } from '../ui/ErrorPage'
import { CheckingAuth } from '../ui/'
import { PublicRoute } from './shared/PublicRoute'
import { PrivateRoute } from './shared/PrivateRoute'
import { useCheckAuth } from '../hooks/useCheckAuth'

const routesConfig = createBrowserRouter([
  {
    path: '/auth/*',
    element: <PublicRoute />,
    children: childAuthRoutes,
    errorElement: <ErrorPage />
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: childJournalRoutes,
    errorElement: <ErrorPage />
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
