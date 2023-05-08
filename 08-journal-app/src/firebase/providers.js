import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from 'firebase/auth'
import { FirebaseApp, FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    // const credentials = GoogleAuthProvider.credentialFromResult(result)
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
      errorCode,
      errorMessage
    }
  }
}

export const registerUserWithEmailAndPassword = async ({
  email,
  password,
  displayName
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    )
    await updateProfile(FirebaseAuth.currentUser, { displayName })
    const { uid, photoURL } = resp.user
    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: 'User with this email address already exists.'
    }
  }
}

export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const { displayName, photoURL, uid } = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    )
    return {
      ok: true,
      displayName,
      photoURL,
      uid
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: 'Invalid email or password.'
    }
  }
}
