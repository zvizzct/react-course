import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { ChildJournalRoutes } from '../journal/routes/childJournalRoutes'
import { ChildAuthRoutes } from '../auth/routes/childAuthRoutes'

const routesConfig = createBrowserRouter([
  {
    path: '/auth/',
    element: <AuthRoutes />,
    children: ChildAuthRoutes
  },
  {
    path: '/',
    element: <JournalRoutes />,
    children: ChildJournalRoutes
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />
  }
])

export const AppRouter = () => {
  return <RouterProvider router={routesConfig} />
}
