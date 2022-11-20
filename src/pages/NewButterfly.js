import { useParams } from 'react-router-dom';
//import { firestore } from '../firebase/config';
import {butterflies} from './butterfly-data';

function NewButterfly() {
  const { id } = useParams();
  const _id=Number(id)
  const butterfly=butterflies.find(butterfly => butterfly.id === id);
  const nextid='/'+(_id+1)
  const previd='/'+(_id-1)
  return (
    <div className="container">
 <h1> <img src="./favicon.ico" alt="butterfly" /><a href={previd}><i class="angle left icon" /></a>
 Butterfly {butterfly.id}<a href={nextid}><i class="angle right icon" /></a> </h1>

<h2>Name: {butterfly.name} </h2>
<h2>Sex: {butterfly.sex}</h2> 
<h2>Birthday: {butterfly.date} </h2>
 </div>
  );

}

export default NewButterfly;
