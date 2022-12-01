import React, { useState, useMemo } from 'react'
import { sortRows, filterRows, paginateRows } from '../helpers'
import { Pagination } from './Pagination'

export function Datatable({ columns, rows, handleAdd, handleClear, handleEdit, handleDelete }) {
    const [activePage, setActivePage] = useState(1)
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState({ order: 'desc', orderBy: 'date' })
    const rowsPerPage = 10

    const filteredRows = useMemo(() => filterRows(rows, filters), [rows, filters])
    const sortedRows = useMemo(() => sortRows(filteredRows, sort), [filteredRows, sort])
    const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage)

    const count = filteredRows.length
    const totalPages = Math.ceil(count / rowsPerPage)

    const handleSearch = (value, accessor) => {
        setActivePage(1)

        if (value) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [accessor]: value,
            }))
        } else {
            setFilters((prevFilters) => {
                const updatedFilters = { ...prevFilters }
                delete updatedFilters[accessor]

                return updatedFilters
            })
        }
    }

    const handleSort = (accessor) => {
        setActivePage(1)
        setSort((prevSort) => ({
            order: prevSort.order === 'asc' && prevSort.orderBy === accessor ? 'desc' : 'asc',
            orderBy: accessor,
        }))
    }

    const clearAll = () => {
        setSort({ order: 'desc', orderBy: 'date' })
        setActivePage(1)
        setFilters({})
        // clear inputs
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
        handleClear();
    }

    return (
        <>
        <div>
        <input
            key="name-search"
            type="search"
            placeholder="Search Name"
            value={filters["name"]}
            onChange={(event) => handleSearch(event.target.value, "name")} />
                    <button onClick={clearAll}><i className="filter icon"></i></button>
            {handleAdd && <button onClick={handleAdd}><i className="add icon"></i></button> }
            </div>
            <table className="ui celled table">
                <thead>
                    <tr>
                        {columns.map((column) => {
                            const sortIcon = () => {
                                if (column.accessor === sort.orderBy) {
                                    if (sort.order === 'asc') {
                                        return 'sort up icon'
                                    }
                                    return 'sort down icon'
                                } else {
                                    return '️sort icon'
                                } 
                            }
                            return (
                                <th className="table-header"
                                    key={column.accessor}>
                                   <span onClick={() => handleSort(column.accessor)}>{column.label} <i className={sortIcon()}></i></span>
                                </th>
                            )
                        })}
                        {handleEdit && <th className="table-header">Action</th> }
                    </tr>
                </thead>
                <tbody>
                    {calculatedRows.map((row) => {
                        return (
                            <tr key={row.id}>
                                {columns.map((column) => {
                                    if (column.format) {
                                        return <td key={column.accessor}>{column.format(row[column.accessor])}</td>
                                    }
                                    if (column.accessor === "id") {
                                        return <td key={column.accessor}><a href={row.id}>{row[column.accessor]}</a></td>
                                    }
                                    return <td key={column.accessor}>{row[column.accessor]}</td>
                                })}
                                { handleEdit && 
                                <td>
                                <button type="button"
                                onClick={(event) => handleEdit(event, row)}
                                > <i className="edit icon"></i>
                                </button>
                                <button type="button" 
                                onClick={() => handleDelete(row.id)}
                                ><i className="delete icon"></i>
                                </button>                             
                                </td>
                    }

                            </tr>
                        )
                    })}

            {count > 0 ? (
                <Pagination
                    activePage={activePage}
                    count={count}
                    rowsPerPage={rowsPerPage}
                    totalPages={totalPages}
                    setActivePage={setActivePage} 
                    handleDelete={handleDelete} />
            ) : (
            <tr><td><p>No Data Found</p></td></tr>
            )}
</tbody>
</table>

        </>
    )
}
