//import { getAdditionalUserInfo } from 'firebase/auth';
import { firestore } from './config';
import {  doc, getDoc, updateDoc  } from "firebase/firestore"

function getDate() {
    const today=new Date();
    return today.toISOString().split('T')[0]
  }

export const updatePath = async (id, filePath) => {
  const docRef = doc(firestore, "butterflies", id);
  return await updateDoc(docRef,{path:filePath});
};

export function newButterfly(id) {
  return {id:id,name:"", sex:" ",date:getDate()}
}

export const getButterfly = async (id) => {
  const docRef = doc(firestore, "butterflies", id);
  const docSnap = await getDoc(docRef);
  return (docSnap.exists() ? docSnap.data() : newButterfly(id) );
};


export const getFilePath = (id) => {
  const filePath = `images/${id}`;
  return filePath;
};
