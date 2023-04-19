import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return {
    logged: !!user,
    user
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, dispach] = useReducer(authReducer, {}, init)
  const login = (name = '') => {
    const user = { id: 'ABC', name }
    const action = {
      type: types.login,
      payload: user
    }
    localStorage.setItem('user', JSON.stringify(user))
    dispach(action)
  }
  const logOut = () => {
    const action = {
      type: types.logout
    }
    localStorage.removeItem('user')
    dispach(action)
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
