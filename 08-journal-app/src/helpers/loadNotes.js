import { collection, doc, getDocs } from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/config'

export const loadNotes = async (uid = '') => {
  if (!uid) throw new Error('uid is required')
  const collectionRed = collection(FirebaseDB, `${uid}/journal/notes`)
  const docs = await getDocs(collectionRed)
  const notes = []
  docs.forEach((doc) => notes.push({ id: doc.id, ...doc.data() }))
  return notes
}
