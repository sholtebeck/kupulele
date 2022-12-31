//import {butterflies } from './butterfly-data';
import { useState, useEffect } from 'react';
import { getButterflies } from '../firebase/firestore';
import { Datatable } from './Datatable';
import NavBar from '../NavBar';

const ButterflyList = () => {

  const [butterflies, setButterflies] = useState([]);

  const columns = [
    { accessor: '_id', label: 'ID' },
    { accessor: 'name', label: 'Name ' },
    { accessor: 'date', label: 'Date ' },
    { accessor: 'sex', label: 'Sex ' },
    { accessor: 'ohana', label: 'Ohana' },
    ];

    useEffect(() => {
      const loadButterflies = async () => {
        const butterflyList=await getButterflies();
        setButterflies(butterflyList);
        console.log(butterflyList);
      };
      loadButterflies();
    }, []);

  return (
    <div>
    <NavBar />
    <div className="halfsize">
    <h1><img src="./favicon.ico" alt="butterfly" /> Butterfly List</h1>
    <Datatable rows={butterflies} columns={columns} />
    </div>
    </div>
  );
};

export default ButterflyList;
