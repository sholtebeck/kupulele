import React from 'react';

export const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage, handleDelete }) => {
    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
    const end = activePage === totalPages ? count : beginning + rowsPerPage - 1
  
    return (
      <tr key="footer" className="pagination">
          <td><button onClick={() => setActivePage(1)}><span><i className="angle double left icon"></i></span></button>
          <button disabled={activePage === 1} onClick={() => setActivePage(activePage - 1)}>
          <span><i className="angle left icon"></i></span>  </button>
          </td>
          <td className="table-header">Page: {activePage} of {totalPages} </td>
          <td className="table-header">Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count} </td>
          { handleDelete && <td /> }
          <td>
          <button 
          disabled={activePage === totalPages} onClick={() => setActivePage(activePage + 1)}>
          <span><i className="angle right icon"></i></span>   </button>
          <button disabled={activePage === totalPages} onClick={() => setActivePage(totalPages)}>
          <span><i className="angle double right icon"></i> </span> </button>           
          </td>
       </tr>
     )
  }
  