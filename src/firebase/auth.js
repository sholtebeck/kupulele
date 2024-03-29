//import firebase from 'firebase/app';
import {getAuth, signOut, GoogleAuthProvider, signInWithPopup,
  createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { createUserDocument } from './user';

export const signup = async ({ firstName, lastName, email, password }) => {
  const resp = await createUserWithEmailAndPassword(email, password);
  const user = resp.user;
  await user.updateProfile({ displayName: `${firstName} ${lastName}` });
  await createUserDocument(user);
  return user;
};

export const logout = () => {
  return signOut();
};

export const googleLogin = async() => {
     const provider = new GoogleAuthProvider();
     const resp = await signInWithPopup(provider);
     return resp.user;
}

export const login = async ({ email, password }) => {
  const resp = await signInWithEmailAndPassword(getAuth(), email, password);
  return resp.user;
};
