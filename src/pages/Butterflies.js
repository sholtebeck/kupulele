import React, { useState, useEffect } from 'react';
import UserProvider from '../firebase/UserProvider'
import { firestore } from '../firebase/config';
import { collection, doc, getDocs,  deleteDoc,  query, orderBy} from "firebase/firestore";
import { Datatable } from './Datatable';
import Butterfly from './Butterfly';


function getSex(s) {
  return s==='F' ? "Female" : s==='M' ? "Male" : "Undefined";
}
function getDate() {
  const today=new Date();
  return today.toISOString().split('T')[0]
}

const Butterflies = () => {
  const { user, isLoading } = UserProvider();
  //const userName = getUser(user.displayName);

  const columns = [
    { accessor: 'id', label: 'ID' },
    { accessor: 'name', label: 'Name ' },
    { accessor: 'date', label: 'Date ' },
    { accessor: 'sex', label: 'Sex ' },
  ];

  const [butterflies, setButterflies] = useState([]);
  const [butterfly, setButterfly] = useState({});
  const [action, setAction] = useState("");
  const [message,setMessage] = useState("");

  const handleAdd = () => {
    setButterfly({id:"0",name:"",sex:"",date:getDate()});
    setAction("Add");
//    setNewId(null)
//    setNewName("")
//    setNewSex("")
//    setNewDate(getDate())
  }
  
  
  const handleClear = () => {
    setButterfly({id:"0",name:"",sex:"",date:getDate()});
    setAction("");
  //  setNewId(null)
  //  setNewName("")
  //  setNewSex("")
  //  setNewDate(getDate())
  }


  const handleDelete = async (id) => {
        await deleteDoc(doc(firestore, "butterflies", id));
        setButterflies(butterflies.filter(butterfly => butterfly.id !== id));
        setMessage("deleted butterfly:" + id)
  };

  const handleEdit = (event, butterfly) => {
    console.log("editing:"+butterfly.id)
    setButterfly(butterfly);
    setAction("Edit");
  };

  const handleUpsert = (newButterfly) => {
    setButterflies(butterflies.filter(butterfly => butterfly.id !== newButterfly.id))
    setButterflies([newButterfly,...butterflies]);
    setAction("");
};

  useEffect(() => {
    const getButterflies = async () => {
      const butterfliesCollectionRef = collection(firestore, "butterflies");
      const butterfliesQuery = query(butterfliesCollectionRef, orderBy("date","desc"));
      const data = await getDocs(butterfliesQuery);
      const butterflies = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // set sex for each butterfly
      butterflies.forEach (butterfly => { butterfly.sex=getSex(butterfly.sex) });
      setButterflies(butterflies);
      setMessage("Welcome "+ user.email)
     };

    if (!isLoading) {
         getButterflies();
    }
  }, [user, isLoading]);

  return (
    <div className="App">
        <h3>{message}</h3>
  <div className="ui two column grid">
    <div className="row"> 
  <div className="column">
      <h1><img src="./favicon.ico" alt="butterfly" /> Butterflies</h1> 
    
       <Datatable rows={butterflies} columns={columns} 
          handleAdd={handleAdd}
          handleClear={handleClear}
          handleEdit={handleEdit} 
          handleDelete={handleDelete}
          />
</div>
<div className="column">
  {action && 
  <Butterfly action={action} butterfly={butterfly} handleClear={handleClear} handleUpsert={handleUpsert}  />
  }
      </div>
      </div>
      </div>
    </div>
  );
};

export default Butterflies;
