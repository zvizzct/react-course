import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from 'firebase/auth'
import { FireBaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FireBaseAuth, googleProvider)
    // const credential = GoogleAuthProvider.credentialFromResult(result)
    const user = result.user
    const { displayName, email, photoURL, uid } = result.user
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return {
      ok: false,
      errorMessage
    }
  }
}

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName
}) => {
  try {
    console.log({ email, password, displayName })
    const result = await createUserWithEmailAndPassword(
      FireBaseAuth,
      email,
      password
    )
    console.log(result)
    const { uid, photoURL } = result.user
    await updateProfile(FireBaseAuth.currentUser, {
      displayName
    })
    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName
    }
  } catch (error) {
    return { ok: false, errorMessage: error.message }
  }
}

export const logInWithEmailPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(
      FireBaseAuth,
      email,
      password
    )
    const { displayName, photoURL, uid } = result.user
    return {
      ok: true,
      displayName,
      photoURL,
      uid
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}

export const logOutFirebase = async () => {
  return await FireBaseAuth.signOut()
}
