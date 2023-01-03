import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getButterfly} from '../firebase/firestore';
import {getSex}  from './butterfly-data';
import ProfileImage from '../ProfileImage';
import AddComment from './AddComment';
import Comments from './Comments';
import useUser from '../hooks/useUser';
import NavBar from '../NavBar';

function NewButterfly() {
  const {user} = useUser();
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
    <div>
    <NavBar />
    <div className="ui two column grid halfsize">
      
 <h1> <a href="/"><img src="./favicon.ico" alt="butterfly" /></a> <a href={previd}><i className="angle left icon" /></a>
  {butterfly.name}<a href={nextid}><i className="angle right icon" /></a> </h1>
  
  <div className="row"> 
  <div className="column">

<ProfileImage id={id} />

{user ? 
<AddComment butterfly={butterfly}  onComment={newButterfly => setButterfly(newButterfly)} />
: <a href="/login"><button>Login to Add a Comment</button></a>
}
</div>
<div className="column" >
  <h2>ID: {butterfly.id} </h2>
  <h2>Name: {butterfly.name} </h2>
  {butterfly.sex && <h2>Sex: {getSex(butterfly.sex)}</h2> } 
  <h2>Birthday: {butterfly.date} </h2>
  {butterfly.ohana && <h2>Ohana: {butterfly.ohana} </h2>}

  {butterfly.comments && <Comments comments={butterfly.comments} /> }

 

</div>
</div>
 </div>
 </div>
  );

}

export default NewButterfly;
