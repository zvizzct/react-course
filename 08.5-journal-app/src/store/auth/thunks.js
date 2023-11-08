import {
  logInWithEmailPassword,
  logOutFirebase,
  registerUserWithEmailPassword,
  signInWithGoogle
} from '../../firebase/providers'
import { clearNotesLogout } from '../journal/journalSlice'
import { checkingCredentials, login, logout } from './'

export const checkingAuthentication = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await signInWithGoogle()
    if (!result.ok) return dispatch(logout(result.errorMessage))
    dispatch(login(result))
  }
}

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName
      })
    if (!ok) return dispatch(logout({ errorMessage }))
    dispatch(login({ uid, displayName, email, photoURL }))
  }
}

export const startLogInWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingAuthentication({ email, password }))
    const { displayName, photoURL, uid, ok, errorMessage } =
      await logInWithEmailPassword({
        email,
        password
      })
    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(login({ displayName, photoURL, uid, email }))
  }
}

export const startLogOut = () => {
  return async (dispatch) => {
    await logOutFirebase()
    dispatch(clearNotesLogout())
    dispatch(logout())
  }
}
