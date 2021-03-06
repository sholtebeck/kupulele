import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase/config';
import { Datatable } from './Datatable';

function getSex(s) {
  return s==='F' ? "Female" : s==='M' ? "Male" : "Undefined";
}
function getDate() {
  const today=new Date();
  return today.toISOString().split('T')[0]
}
//function getUser(u) {
//  return u.split(' ')[0];
//} 



const Butterflies = () => {
  const columns = [
    { accessor: 'name', label: 'Name ' },
    { accessor: 'date', label: 'Date ' },
    { accessor: 'sex', label: 'Sex ' },
  ];
  const [newId,setNewId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newSex, setNewSex] = useState("");
  const [newDate, setNewDate] = useState(getDate());
  const [butterflies, setButterflies] = useState([]);
  const [action, setAction] = useState("Add")

  const handleClear = () => {
    setAction("Add")
    setNewId(null)
    setNewName("")
    setNewSex("")
    setNewDate(getDate())
  }

  const handleSave = async () => {
    console.log("saving "+newName+" "+newId)
    const butterfliesRef = firestore.collection('butterflies');
    const newButterfly = { name: newName, date: newDate, sex: newSex }
    console.log(newId, JSON.stringify(newButterfly));
    if (newId) {
      newButterfly.id=newId;
      const docId = butterfliesRef.doc(newId)
      await docId.update( newButterfly );
      setButterflies(butterflies.filter(butterfly => butterfly.id !== newId))
    } else {
      const docRef = await butterfliesRef.add( newButterfly );
      newButterfly.id = docRef.id;
    }
    newButterfly.sex=getSex(newButterfly.sex);
    setButterflies([newButterfly,...butterflies])
    handleClear();
  };


  const handleDelete = (id) => {
        console.log("deleting:" + id)
        setButterflies(butterflies.filter(butterfly => butterfly.id !== id))
        const butterflyDoc = firestore.collection('butterflies').doc(id)
        butterflyDoc.delete().then(() => {
          console.log("Document "+id+" deleted");
        }).catch((error) => {
          console.error("Delete error: ", error);
        });
  };

  const handleEdit = (event, butterfly) => {
    setAction("Edit");
    console.log("editing:"+butterfly.id)
    setNewId(butterfly.id);
    setNewName(butterfly.name);
    setNewSex(butterfly.sex[0]);
    setNewDate(butterfly.date);
  };

  useEffect(() => {
    const butterfliesRef = firestore.collection('butterflies');
    const unsubscribe = butterfliesRef.onSnapshot((querySnapshot) => {
      const butterflies = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // set sex for each butterfly
      butterflies.forEach (butterfly => { butterfly.sex=getSex(butterfly.sex) });
      setButterflies(butterflies);
    });
    return unsubscribe;
  }, []);

  function getSaveIcon() {
    return action==="Add" ? "plus icon" : "check icon";
  }

  return (
    <div className="App">
  <div class="ui two column grid">
    <div class="row"> 
  <div class="column">
      <h1><img src="./favicon.ico" alt="butterfly" /> Butterflies</h1>
       <Datatable rows={butterflies} columns={columns} 
          handleClear={handleClear}
          handleEdit={handleEdit} 
          handleDelete={handleDelete}
          />
</div>
<div class="column">
<h1> {action} butterfly  </h1>
       <table>
         <thead>
         <tr>
           <th className="table-header">Name</th>
           <th className="table-header">Date</th>
           <th className="table-header">Sex</th>
           <th className="table-header">Action</th>
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
    <button type="button" onClick={handleSave}> <i class={getSaveIcon()}></i></button>
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
      </div>
      </div>
    </div>
  );
};

export default Butterflies;
