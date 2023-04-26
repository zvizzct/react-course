import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { childAuthRoutes } from '../auth/routes/childAuthRoutes'
import { childJournalRoutes } from '../journal/routes/childJournalRoutes'
import { ErrorPage } from '../ui/ErrorPage'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/journalRoutes'

const routesConfig = createBrowserRouter([
  {
    path: '/auth/*',
    // ? Login Y registro
    element: (
      //   <PublicRoute>
      <AuthRoutes />
      //   </PublicRoute>
    ),
    children: childAuthRoutes,
    errorElement: <ErrorPage />
  },
  {
    // ? Journalist App
    path: '/',
    element: (
      //   <PrivateRoute>
      <JournalRoutes />
      //   </PrivateRoute>
    ),
    children: childJournalRoutes,
    errorElement: <ErrorPage />
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />
  }
])

export const AppRouter = () => {
  return <RouterProvider router={routesConfig} />
}
