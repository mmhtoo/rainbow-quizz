import {FIREBASE_ADMIN} from '.'
import firebaseAdmin from 'firebase-admin'

const firebaseAdminFactory = {
  provide: FIREBASE_ADMIN,
  useFactory: () =>
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert('firebase.env.json'),
    }),
}

export default firebaseAdminFactory
