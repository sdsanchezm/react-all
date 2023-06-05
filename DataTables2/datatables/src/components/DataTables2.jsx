import React from "react";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Button } from 'react-bootstrap';


function DataTables2() {

  const [data1, setData1] = useState([]);

  // callback function to update data1 (not really used, it's optional)
  function updateData1(data1){
    setData1(data1)
  };

// another way to handle fetching data from api
  const getData = () => {
    const response = fetch(`http://127.0.0.1:8000/test/student/`)
      .then( (response) => response.json() )
      .then( (data) => {
      console.log(`data: ${data}`);
      updateData1(data);
    })
      .catch( (error) => {
      console.error(`This is an HTTP error: The status is ${response.status} - ${error}`);
    })

    console.log(`data1_1: ${data1}`);
    updateData1(data1);
    console.log(`data1_2: ${data1}`);
    
}

// Load the information at the start


// test ======================================================
    const [students, setStudents] = useState([]);
    const [records, setRecords] = useState([]);

    // this is another option of fetching information using fetch (work in progress at the moment)
    const fetchStudents = async () => {
        const response = await axios
            .get("http://127.0.0.1:8000/test/student/")
            .catch((err) => console.log(err));

        let studentsList = [];
        if (response) {
            studentsList = response.data;
            console.log("Students_1: ", studentsList);
            setStudents(studentsList);
            console.log("Students_2: ", students);
        }
        // return studentsList;
        setRecords(studentsList);
    };

    // Initial fetching of information from the api
    useEffect(() => {
        // getData();
        fetchStudents();
    }, []);

    // this is the definition of the columns for DataTables
    const columns = [
        {
            name: "id",
            selector: row => row.id,
            sortable: false
        }
        ,
        {
            name: "student_firstname",
            selector: row => row.student_firstname,
            sortable: true
        },
        {
            name: "student_lastname",
            selector: row => row.student_lastname,
            sortable: true
        },
        {
            name: "student_number",
            selector: row => row.student_number,
            sortable: true
        },
        {
            name: "action",
            cell: (row) => (
                <button
                    className="btn btn-primary"
                    onClick={() => { alert(row.id) }}
                >
                    Edit
                </button>
            ),
        }
    ]


    // this is the FIRST way to filter
    const handleFilter = (e) => {
        const newData = students.filter(row => {
            return row.student_firstname.toLowerCase().includes(e.target.value.toLowerCase());
        })
        setRecords(newData);
    };


    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);

    // this is the SECOND way to filter
    useEffect(() => {
        const result = students.filter((student) => {
            return student.student_firstname.toLowerCase().match(search.toLocaleLowerCase());
        });
        // 
        setFiltered(result);
    }, [search]);


  return (
    <div className="container">
        <h1>Data Tables</h1>

        <div><input type="text" onChange={(e) => handleFilter(e)}></input></div>

        <DataTable
            title="Student List title"
            columns={columns}
            data={records} // this is the FIRST way to handle search using the handleFilter function
            // data={filtered} // this is SECOND way to handle search (using useEffect)
            pagination
            fixedHeader
            fixedHeaderScrollHeight="500px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            actions={ <Button className="btn btn-primary">Export</Button> }
            subHeader
            subHeaderComponent={
                <input
                type="text"
                placeholder="search..."
                className="w-25 form-control"
                value={search}
                onChange={ (e) => { setSearch(e.target.value)}}
                />
            }
            subHeaderAlign="right"
            >
        </DataTable>

        {/* <pre>{JSON.stringify(students, null, 2)}</pre> */}

      
    </div>
  );
}

export default DataTables2;
