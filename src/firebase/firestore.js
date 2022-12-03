import { firestore, storage } from './config';
import { getSex } from '../pages/butterfly-data';
import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, setDoc, updateDoc, where  } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

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

export const deleteButterfly = async (id) => {
  await deleteDoc(doc(firestore, "butterflies", id));
};

export const getButterflies = async () => {
  const butterfliesCollectionRef = collection(firestore, "butterflies");
  const butterfliesQuery = query(butterfliesCollectionRef, orderBy("date","desc"));
  const data = await getDocs(butterfliesQuery);
  const butterflies = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  butterflies.forEach (butterfly => { butterfly.sex=getSex(butterfly.sex) });
  return butterflies;
};

export const getButterfly = async (id) => {
  const docRef = doc(firestore, "butterflies", id);
  const docSnap = await getDoc(docRef);
  return (docSnap.exists() ? docSnap.data() : newButterfly(id) );
};

export const setButterfly = async (butterfly) => {
  await setDoc(doc(firestore, "butterflies", butterfly.id), butterfly);
}

export const getFilePath = (id) => {
  const filePath = `images/${id}_200x200`;
  return filePath;
};

export const getUrl = async (path) => {
  return await getDownloadURL(ref(storage, path));
}

export const getImages = async () => {
  const butterfliesCollectionRef = collection(firestore, "butterflies");
  const imagesQuery = query(butterfliesCollectionRef, where("path", ">=", "images/"));
  const data = await getDocs(imagesQuery);
  const images = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  images.forEach (async image => { 
    image.path = getFilePath(image.id);
  });
  return images;
};
