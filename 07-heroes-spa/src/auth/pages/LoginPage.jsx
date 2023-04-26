import { useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {
  const navigate = useNavigate()
  const { logged, login } = useContext(AuthContext)
  const lastPath = localStorage.getItem('lastPath') || '/'
  console.log(lastPath)
  const handleLogin = () => {
    login('Jorge')
    navigate(lastPath, {
      replace: true
    })
  }

  return !logged ? (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  ) : (
    <Navigate to={lastPath} />
  )
}
