import React, { useState } from 'react';
import { setButterfly, getFilePath } from '../firebase/firestore';
import ProfileImage from '../ProfileImage';
import useUser from '../hooks/useUser';

function getSex(s) {
  return s[0]==='F' ? "Female" : s[0]==='M' ? "Male" : "Undefined";
}

const Butterfly = ({action,butterfly,handleClear,handleUpsert}) => {
  const {user } = useUser();
  const [newId,setNewId] = useState(butterfly.id);
  const [newName, setNewName] = useState(butterfly.name);
  const [newSex, setNewSex] = useState(butterfly.sex[0]);
  const [newDate, setNewDate] = useState(butterfly.date);
  const [newOhana, setNewOhana] = useState(butterfly.ohana||"");
  const [newPath, setNewPath] = useState(butterfly.path||"");


  const handleSave = async () => {
    const newButterfly = { id: newId, name: newName, date: newDate, sex: newSex }
    if (newOhana) { newButterfly.ohana = newOhana }
    if (newPath) { newButterfly.path = newPath }
    //console.log(newId, JSON.stringify(newButterfly));
    await setButterfly(newButterfly);
    newButterfly.sex=getSex(newButterfly.sex);
    handleUpsert(newButterfly);
  };

  function getSaveIcon() {
    return action==="Add" ? "plus icon" : "check icon";
  }

  function getName() {
    return action==="Add" ? "Butterfly" : newName;
  }

  function updatePath() {
    const filePath=getFilePath(newId)
    setNewPath(filePath)
  }
  return (
    <div className="App top-table">
<h1> <img src="/favicon.ico" alt="butterfly" /> {action} {getName()}  </h1>

       <table className="ui table">
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
    <option value="M">Male</option> 
    <option value="F">Female</option>
    <option value="">Undefined</option>
    </select>
    </td>
    </tr>
    <tr>
        <td className="column-header">Ohana</td>
      <td>
      <input 
        value={newOhana}
        onChange={(event) => {
          setNewOhana(event.target.value);
        }}
      />   
    </td>
    </tr>
    <tr>
        <td className="column-header">Path</td>
      <td>
      <input 
        value={newPath}
        onChange={(event) => {
          setNewPath(event.target.value);
        }}
      />  
      <button onClick={updatePath}>Update Path</button> 
    </td>
    </tr>
    <tr>
        <td className="column-header">Photo</td>
      <td>
        <div className="photo-update"> <ProfileImage id={newId} setNewPath={setNewPath} user={user} /> </div>
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
