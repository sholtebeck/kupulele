import React, { useState } from 'react';
import { firestore } from '../firebase/config';
import { useForm } from 'react-hook-form';
import { signup } from '../firebase/auth';
import { Link } from 'react-router-dom';

function getSex(s) {
    return s==='F' ? "Female" : s==='M' ? "Male" : "Undefined";
  }
  function getDate() {
    const today=new Date();
    return today.toISOString().split('T')[0]
  }
  function getUser(u) {
    return u.split(' ')[0];
  } 

function NewButterfly({butterflies}) {
    const [newName, setNewName] = useState("");
    const [newSex, setNewSex] = useState("");
    const [newDate, setNewDate] = useState(getDate());
    const [butterflies, setButterflies] = useState([]);
//    const [user, setUser] = useState("");

    const createButterfly = async () => {
          console.log("adding "+newName)
        //  const butterfliesRef = firestore.collection('butterflies');
        //  const newButterfly = { name: newName, date: newDate, sex: newSex }
        //  const docRef = await firestore.addDoc(butterfliesRef, newButterfly );
        //  newButterfly.id=docRef.id;
        //  setButterflies([newButterfly,...butterflies])
        //  setNewName("")
        //  setNewSex("")
        //  setNewDate(getDate())
        };
      
  return (
    <div className="container">
              <table>
      <thead>
      <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Date</th>
          <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          <input
        placeholder="Name..."  value={newName}
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />          </td>
      <td>
      <select name="sex"  value={newSex}
      onChange={(event) => { setNewSex(event.target.value) }}>
    <option value="F">Female</option>
    <option value="M">Male</option>
    <option value="">Undefined</option>
    </select>
      </td>
      <td>
      <input  type="date"
        value={newDate}
        onChange={(event) => {
          setNewDate(event.target.value);
        }}
      />
      </td>
      <td>
      <button onClick={createButterfly} disabled={!newName||!user}>Insert</button>
      </td>
        </tr>
        </tbody>
        </table>


        <h1> <img src="./favicon.ico" alt="butterfly" /> {action} butterfly  </h1>
       <table>
         <thead>
         <tr>
           <th>Name</th>
           <th>Date</th>
           <th>Sex</th>
           <th>Action</th>
         </tr>
         </thead>
         <tbody>
           <tr>
       <td>
       <input
        placeholder="New Name"  value={newName}
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />       </td>
      <td>
      <input  type="date"
        value={newDate}
        onChange={(event) => {
          setNewDate(event.target.value);
        }}
      />
      </td>
      <td>
      <select name="sex"  value={newSex}
      onChange={(event) => { setNewSex(event.target.value) }}>
    <option value="F">Female</option>
    <option value="M">Male</option>
    <option value="">Undefined</option>
    </select>
    </td>
    <td>
    { newName ? (
      <div> 
    <button type="button" onClick={handleSave}> <i class="check icon"></i></button>
    <button type="button" onClick={handleClear}><i className="undo icon"></i></button>
    </div>
    ):(<div>
      <button type="button" onClick={handleClear}><i className="undo icon"></i></button>
  
    </div>)
    } 
 
    </td></tr>
      </tbody>
      </table>

    </div>
  );
}

export default NewButterfly;
