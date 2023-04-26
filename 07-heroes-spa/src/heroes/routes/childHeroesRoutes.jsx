import { Navigate } from 'react-router-dom'
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages'
import { AllHeroPage } from '../pages/AllHeroPage'

export const childHeroesRoutes = [
  {
    path: 'marvel',
    element: <MarvelPage />
  },
  {
    path: 'dc',
    element: <DcPage />
  },
  {
    path: 'search',
    element: <SearchPage />
  },
  { path: 'hero/:id', element: <HeroPage /> },

  {
    path: '*',
    element: <Navigate to="/" />
  },
  {
    path: '/',
    element: <AllHeroPage />
  }
]
