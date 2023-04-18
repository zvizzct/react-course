import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { childHeroesRoutes } from '../heroes/routes/childHeroesRoutes'

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
    <>
      <RouterProvider router={router} />
    </>
  )
}
