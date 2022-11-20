//import { getAdditionalUserInfo } from 'firebase/auth';
import { firestore, storage } from './config';

function getDate() {
    const today=new Date();
    return today.toISOString().split('T')[0]
  }

export const newButterfly = async (butterfly) => {
  // get a reference to the Firestore document
  const docRef = firestore.doc(`/butterflies/${butterfly.id}`);

  // create user object
  const butterflyData= {
    id: butterfly.id,
    name: '',
    date: getDate(),
    sex: '',
  };

  // write to Cloud Firestore
  return docRef.set(butterflyData);
};

export const updateButterfly = async (butterfly) => {
  const docRef = firestore.doc(`/butterflies/${butterfly.id}`);
  return docRef.update(butterfly);
};

export const uploadImage = (id, file, progress) => {
  return new Promise((resolve, reject) => {
    // create file reference
    const filePath = `kupu/${id}/image`;
    const fileRef = storage.ref().child(filePath);

    // upload task
    const uploadTask = fileRef.put(file);

    uploadTask.on(
      'state_changed',
      (snapshot) => progress(snapshot),
      (error) => reject(error),
      () => {
        resolve(uploadTask.snapshot.ref);
      }
    );
  });
};

export const getDownloadUrl = (id) => {
  const filePath = `kupu/${id}/image`;
  return storage.ref().child(filePath).getDownloadURL();
};
