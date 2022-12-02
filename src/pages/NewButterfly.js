import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { firestore } from '../firebase/config';
import {getButterfly} from '../firebase/firestore';
import ProfileImage from '../ProfileImage';

function NewButterfly() {
  const [butterfly, setButterfly] = useState({});
  const { id } = useParams();
  const _id=Number(id);
  const nextid='/'+(_id+1);
  const previd='/'+(_id-1);

  useEffect(() => {
    const loadButterfly = async () => {
      const newButterfly=await getButterfly(id);
      newButterfly.id = id;
      setButterfly(newButterfly);
    };
    loadButterfly();
  }, [id]);

  return (
    <div className="ui two column grid halfsize">
 <h1> <img src="./favicon.ico" alt="butterfly" /><a href={previd}><i className="angle left icon" /></a>
  {butterfly.name}<a href={nextid}><i className="angle right icon" /></a> </h1>
  
  <div className="row"> 
  <div className="column">

<ProfileImage id={id} />
</div>
<div className="column">
<p></p>
  <h2>ID: {butterfly.id} </h2>
  <h2>Name: {butterfly.name} </h2>
  <h2>Sex: {butterfly.sex}</h2> 
  <h2>Birthday: {butterfly.date} </h2>
  {butterfly.ohana && <h2>Ohana: {butterfly.ohana} </h2>}

</div>
</div>
 </div>
  );

}

export default NewButterfly;
