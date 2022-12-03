import React, { useRef, useState, useEffect } from 'react';
import { storage } from "./firebase/config";
import { ref, deleteObject, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updatePath, getFilePath,getUrl } from './firebase/firestore';

export const ProfileImage = ({ id, setNewPath, user }) => {
  const fileInput = useRef(null);
  const filePath = getFilePath(id);
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setLoading] = useState(false);

  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    const loadUrl = async () => {
      setLoading(true);
      const thisUrl=await getUrl(filePath);
      setImageUrl(thisUrl);
      setLoading(false);
    };

    if(!isLoading) {
      loadUrl();
    }
    
  }, [filePath,isLoading]);

  useEffect(() => {

    getDownloadURL(ref(storage, filePath)).then((url) => !!url && setImageUrl(url));
  }, [filePath]);

  const handleDelete = async () => {
    const imageRef = ref(storage, filePath);
    await deleteObject(imageRef);
    setImageUrl("");
  };

  const updateProgress = (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setUploadProgress(progress);
  };

  const uploadImage = (id, file) => {
    return new Promise((resolve, reject) => {
      // create file reference
      const newFilePath = `images/${id}`;
      const fileRef = ref(storage, newFilePath);
  
      // upload task
      const uploadTask = uploadBytesResumable(fileRef, file);
  
      uploadTask.on(
        'state_changed',
        (snapshot) => updateProgress(snapshot),
        (error) => reject(error),
        () => {
          resolve(uploadTask.snapshot.ref);
        }
      );
    });
  };

  const fileChange = async (files) => {
    const ref = await uploadImage(id, files[0], updateProgress);
    const downloadUrl = await getDownloadURL(ref);
    setImageUrl(downloadUrl);
    setNewPath(filePath);
    await updatePath(id,filePath);
  };

  function uploadButton() {
    return imageUrl ? <div><button className="ui grey small-button upload-button" onClick={() => fileInput.current.click()} >New Photo <i className="refresh icon"></i></button>
    <button className="ui grey small-button delete-button" onClick={() => handleDelete()}><i className="delete icon"></i></button></div>
    : <button className="ui grey small-button upload-button" onClick={() => fileInput.current.click()} >Add Photo <i className="upload icon"></i></button>
  }

  return (
    <div className="profile-image">
      {(uploadProgress>0 && uploadProgress<100) && <progress style={{ width: '100%' }} max="100"  value={uploadProgress}  />    }
      <img
        className="ui image"
        src={imageUrl || '/logo192.png'}
        alt="profile"
        width="100"
        hidden={isLoading}
      /> 
      <input
        className="file-input"
        type="file"
        accept=".png,.jpg"
        ref={fileInput}
        onChange={(e) => fileChange(e.target.files)}
      />
      {user && uploadButton()}
    </div>
  );
};


export default ProfileImage;