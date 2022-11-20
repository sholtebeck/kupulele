import {butterflies } from './butterfly-data';
import { Datatable } from './Datatable';

const ButterflyList = () => {

  const columns = [
    { accessor: 'id', label: 'ID' },
    { accessor: 'name', label: 'Name ' },
    { accessor: 'date', label: 'Date ' },
    { accessor: 'sex', label: 'Sex ' },
    ];

  return (
    <div className="half-size">
    <h1><img src="./favicon.ico" alt="butterfly" /> Butterfly List</h1>
    <Datatable rows={butterflies} columns={columns} />
    </div>
  );
};

export default ButterflyList;
