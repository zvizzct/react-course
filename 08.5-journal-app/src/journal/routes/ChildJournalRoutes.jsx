import { JournalPage } from '../pages/JournalPage'
import { Navigate } from 'react-router-dom'

export const ChildJournalRoutes = [
  {
    path: '/',
    element: <JournalPage />
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />
  }
]
