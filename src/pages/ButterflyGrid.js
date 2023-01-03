import "../App.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import { getImages } from "../firebase/firestore";
import ProfileImage from '../ProfileImage';

function ButterflyGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const gridSort = (a,b) => { return parseInt(b.id) - parseInt(a.id); }

    const loadImages = async () => {
      const gridImages=await getImages();
      gridImages.sort(gridSort);
      setImages(gridImages);
    };
    loadImages();
  }, []);

  return (
    <div className="App">
    <NavBar />
    <h1><img src="./favicon.ico" alt="butterfly" /> Butterfly Grid</h1>
    <div className="grid-5x5">
       {images.map((image) => {
        return <div className="grid-item" key={image.id} >
        <h3><Link to={`/${image.id}`}>{image.id}</Link> - {image.name} ({image.sex[0]},{image.date})</h3>
         <ProfileImage id={image.id} />
        </div>;
      })}
     </div>
    </div>
  );
} 

export default ButterflyGrid;