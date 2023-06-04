import React from "react";
import DataTable  from "react-data-table-component";
import { useState } from "react";

function DataTable1() {

    
  
    const columns = [
        {
            name: "Name",
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true
        },
        {
            name: "Age",
            selector: row => row.age,
            sortable: true
        }
    ]

    const data = [
        {
            "id": 1,
            name: "Jamecho",
            email: "jamecho@example.com",
            age: 21,
        },
        {
            "id": 2,
            name: "Tiche",
            email: "tiche@example.com",
            age: 42,
        },
        {
            "id": 3,
            name: "Amparo",
            email: "amparo@example.com",
            age: 63,
        },
        {
            "id": 4,
            name: "Jara",
            email: "jara@example.com",
            age: 84,
        },
        {
            "id": 5,
            name: "Obama",
            email: "obama@example.com",
            age: 105,
        }
    ]

    const [records, setRecords] = useState(data);    

    const handleFilter = (e) => {
        // const newData = setRecords(e.target.value);
        const newData = data.filter( row => {
            return row.name.toLowerCase().includes(e.target.value.toLowerCase());
        });

        setRecords(newData);
    }

  return (
    <div >
        <div><input type="text" onChange={handleFilter}></input></div>
        <DataTable
            columns={columns}
            data={records}
            selectableRows
            fixedHeader
            pagination
        >
        </DataTable>
    </div>
  );
}

export default DataTable1;