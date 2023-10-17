import { Navigate } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'

export const ChildAuthRoutes = [
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: 'register',
    element: <RegisterPage />
  },
  {
    path: '/auth/*',
    element: <Navigate to={'/auth/login'} />
  }
]
