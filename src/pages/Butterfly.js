import React, { useState } from 'react';
import { firestore } from '../firebase/config';
import {  collection, doc, addDoc, setDoc } from "firebase/firestore";

function getSex(s) {
  return s==='F' ? "Female" : s==='M' ? "Male" : "Undefined";
}


const Butterfly = ({action,butterfly,handleClear,handleUpsert}) => {

  const [newId,setNewId] = useState(butterfly.id);
  const [newName, setNewName] = useState(butterfly.name);
  const [newSex, setNewSex] = useState(butterfly.sex);
  const [newDate, setNewDate] = useState(butterfly.date);

  const handleSave = async () => {
    console.log("saving "+newName+" "+newId)
    const newButterfly = { id: newId, name: newName, date: newDate, sex: newSex }
    console.log(newId, JSON.stringify(newButterfly));
    if (newId) {
      await setDoc(doc(firestore, "butterflies", newId), newButterfly);
    } else {
      await addDoc(collection(firestore, "butterflies"), newButterfly);
    }
    newButterfly.sex=getSex(newButterfly.sex);
    handleUpsert(newButterfly);
  };

  function getSaveIcon() {
    return action==="Add" ? "plus icon" : "check icon";
  }

  function getName() {
    return action==="Add" ? "Butterfly" : newName;
  }

  return (
    <div className="App">
  <p></p>
<h1> <img src="/favicon.ico" alt="butterfly" /> {action} {getName()}  </h1>
<p></p>
       <table className="ui celled table no-border">
        <thead><tr>
          <th>Field</th>
          <th>Value</th>
          </tr>
        </thead>
         <tbody>
          <tr>
            <td className="column-header">ID</td>
            <td><input 
         value={newId}
        onChange={(event) => {
          setNewId(event.target.value);
        }}
      />  </td>
          </tr>
           <tr>
            <td className="column-header">Name</td>
       <td>
       <input 
        placeholder="Name"  value={newName}
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />       </td>
      </tr>
      <tr>
        <td className="column-header">Date</td>
      <td>
      <input  type="date" 
        value={newDate}
        onChange={(event) => {
          setNewDate(event.target.value);
        }}
      />
      </td>
      </tr>
      <tr>
        <td className="column-header">Sex</td>
      <td>
      <select name="sex"  value={newSex} 
      onChange={(event) => { setNewSex(event.target.value) }}>
    <option value="F">Female</option>
    <option value="M">Male</option>
    <option value="">Undefined</option>
    </select>
    </td>
    </tr>
      <tr>
        <td className="column-header">Action</td>
    <td>
    { newName ? (
      <div> 
    <button type="button" onClick={handleSave}> <i className={getSaveIcon()}></i></button>
    <button type="button" onClick={handleClear}><i className="undo icon"></i></button>
    </div>
    ):(<div>
      <button type="button" onClick={handleClear}> 
      <i className="undo icon"></i>
      </button>
    </div>)
    } 
 
    </td></tr>
      </tbody>
      </table>

    </div>
  );
};

export default Butterfly;
