//import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Kupulele Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjsMqOYErjhwXh8NVZHptUIOPlH9dgbKA",
  authDomain: "kupulele.firebaseapp.com",
  projectId: "kupulele",
  storageBucket: "kupulele.appspot.com",
  messagingSenderId: "759443667425",
  appId: "1:759443667425:web:f9a6f06122f702e7bebaa0"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app);
