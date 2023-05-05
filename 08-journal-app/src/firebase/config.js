import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCz_VFYKwE-kHB1rbdZ_mSjx733hz879mI',
  authDomain: 'react-course-journal.firebaseapp.com',
  projectId: 'react-course-journal',
  storageBucket: 'react-course-journal.appspot.com',
  messagingSenderId: '892558509904',
  appId: '1:892558509904:web:3ea3a43fe121014cbf4e55'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
