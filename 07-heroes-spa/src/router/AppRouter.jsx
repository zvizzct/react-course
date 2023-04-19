import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { childHeroesRoutes } from '../heroes/routes/childHeroesRoutes'
import { AuthProvider } from '../auth/context/AuthProvider'

const router = createBrowserRouter([
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: <HeroesRoutes />,
    children: childHeroesRoutes
  }
])

export const AppRouter = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
