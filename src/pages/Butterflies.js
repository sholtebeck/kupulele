import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import { deleteButterfly, getButterflies } from '../firebase/firestore';
import { Datatable } from './Datatable';
import Butterfly from './Butterfly';
import NavBar from '../NavBar';


function yesterDate() {
  const today=new Date();
  today.setDate(today.getDate()-1);
  return today.toISOString().split('T')[0]
}

const Butterflies = () => {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  //const userName = getUser(user.displayName);

  const columns = [
    { accessor: '_id', label: 'ID' },
    { accessor: 'name', label: 'Name ' },
    { accessor: 'date', label: 'Date ' },
    { accessor: 'sex', label: 'Sex ' }
   ];

  const [butterflies, setButterflies] = useState([]);
  const [butterfly, setButterfly] = useState({});
  const [action, setAction] = useState("");
  const [message, setMessage] = useState("");

  const handleAdd = () => {
    setButterfly({id:nextID(),name:"",sex:" ",date:yesterDate()});
    setAction("Add");
    setMessage("Adding New Butterfly");
  }
  
  function nextID() {
    let lastId=Math.max(...butterflies.map(b => parseInt(b.id)))+1;
    return lastId.toString();
  }
  
  const handleClear = () => {
    setButterfly({id:"0",name:"",sex:"",date:yesterDate(),ohana:""});
    setAction("");
    setMessage("");
  }

  const handleDelete = async (id) => {
        await deleteButterfly(id);
        setButterflies(butterflies.filter(butterfly => butterfly.id !== id));
  };

  const handleEdit = (event, butterfly) => {
    console.log("editing:"+butterfly.id);
    setButterfly(butterfly);
    setMessage("Editing "+butterfly.name)
    setAction("Edit");
  };

  const handleUpsert = (newButterfly) => {
    setButterflies([newButterfly,...butterflies.filter(butterfly => butterfly.id !== newButterfly.id)])
    setMessage(newButterfly.name+" updated")
    setAction("");
  };

useEffect(() => {
  const loadButterflies = async () => {
    const butterflyList=await getButterflies();
    setButterflies(butterflyList);
  };

  if (!user && !isLoading) {
    navigate("/login");
  }

  if (!isLoading) {
    loadButterflies();
  }

}, [navigate,user,isLoading]);

  return (
    <div className="App">
      <NavBar message={message} user={user}/>
  {!isLoading && <div className="ui two column grid">
    <div className="row"> 
  <div className="column">
      <h1><img src="./favicon.ico" alt="butterfly" /> Butterflies </h1> 
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
}
    </div>
  );
};

export default Butterflies;