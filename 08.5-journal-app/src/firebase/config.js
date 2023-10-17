// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB6kReRtFpMLVfHI6RDvVRqTth5iKHOvCc',
  authDomain: 'react-journal-40343.firebaseapp.com',
  projectId: 'react-journal-40343',
  storageBucket: 'react-journal-40343.appspot.com',
  messagingSenderId: '70352476875',
  appId: '1:70352476875:web:0a9e740137f25df999194e'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FireBaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
