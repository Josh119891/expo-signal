import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'YOUR CONFIG',
  authDomain: 'YOUR CONFIG',
  projectId: 'YOUR CONFIG',
  storageBucket: 'YOUR CONFIG',
  messagingSenderId: 'YOUR CONFIG',
  appId: 'YOUR CONFIG',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();
const auth = getAuth(app);
export { auth, db };
