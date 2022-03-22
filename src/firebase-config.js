import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjsMqOYErjhwXh8NVZHptUIOPlH9dgbKA",
  authDomain: "kupulele.firebaseapp.com",
  projectId: "kupulele",
  storageBucket: "kupulele.appspot.com",
  messagingSenderId: "759443667425",
  appId: "1:759443667425:web:f9a6f06122f702e7bebaa0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();