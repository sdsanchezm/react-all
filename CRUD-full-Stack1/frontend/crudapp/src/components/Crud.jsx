import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const base_url = `http://localhost:3001`;

const Crud = () => {

    const [data, setData] = useState([]);

    useEffect( () => {
        // setData(empdata);
        getData();
    }, []);

    const getData = () => {
        axios.get(`${base_url}/api/data`)
        .then( (res) => {
            setData(res.data)
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    const handleSave = () => {
        const url1 = `${base_url}/api/data`;

        const data  = {
            "id": Math.floor(Math.random() * (90)),
            "name": name,
            "age": age,
            "isActive": isActive
        }

        axios.post(url1, data)
        .then( (res) => {
            getData();
            clear();
            toast.success("saved!...");
        })
        .then(() => {
        })
        .then( () => {
            
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    const clear = () => {
        setName('');
        setAge('');
        setIsActive(0);
        setEditName('');
        setEditAge('');
        setEditIsActive(0);
        setEditId(0);
    }

    const empdata = [
        {
            id: 1,
            name: "jamecho",
            age: 22,
            isActive: 1
        },
        {
            id: 2,
            name: "amparo",
            age: 32,
            isActive: 0
        },
        {
            id: 3,
            name: "jamecho",
            age: 32,
            isActive: 1
        },

    ];

    // Edit Feature
    const handleEdit = (id) => {
        console.log(id);
        handleShow();

        const url = `${base_url}/api/data/${id}`;
        axios.get(url)
        .then( (res) => {
            setEditName(res.data.name);
            setEditAge(res.data.age);
            setEditIsActive(res.data.isActive);
            setEditId(id);
        })
        .then( (error) => {
            console.error(error);
        })
    };

    const handleUpdate  = () => {

        const url = `${base_url}/api/data/${editId}`;

        const data = {
            id: editId,
            name: editName,
            age: editAge,
            isActive: editIsActive
        }

        axios.put(url, data)
        .then( (res) => {
            handleClose();
            getData();
            clear();
            toast.success("Updated!...");
        })
        .then( (error) => {
            toast.error(error);
        })

    }

    const handleDelete = (id) => {
        if(window.confirm("sure would like to delete?")){
            console.log(id);
            axios.delete(`${base_url}/api/data/${id}`)
            .then( (res) => {
                if(res.status === 200){
                    console.log("Record Deleted!");
                    toast.success("Record Deleted!");
                }
            })
            .then( () => {
                getData();
            })
            .catch( (error) => {
                toast.error("error");
            })
        }
    };

    const handleIsActiveChange = (e) => {
        // e.preventDefault();
        // if (isActive === 1){
        if (e.target.checked){
            setIsActive(1);
        } else {
            setIsActive(0);
        }
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [isActive, setIsActive] = useState(0);

    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState(0);
    const [editIsActive, setEditIsActive] = useState(0);
    const [editId, setEditId] = useState(0);


    return (

        <>

        <Table striped bordered hover size="sm">

        <thead>
          <tr>

            <th>id - index</th>
            <th>First Name</th>
            <th>Age</th>
            <th>isActive</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

            {
                data && data.length > 0 ? 
                data.map( (item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.id} - {index}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.isActive}</td>
                            <td>
                                <Button 
                                    className="btn btn-primary btn-sm"
                                    onClick={ () => handleEdit(item.id)}>
                                    edit
                                </Button>
                                <Button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(item.id)}>
                                    delete
                                </Button>
                            </td>
                        </tr>
                    )
                }) : 
                <tr><td variant="width: 100%" width="100%">"Loading..."</td></tr>
            }

        </tbody>

      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal User</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
            <Form.Group className="mb-3" controlId="formBasicNameModal">
                <Form.Label>Name x</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter name" 
                value={editName}
                onChange={ (e) => {setEditName(e.target.value)}}
                />
                <Form.Text className="text-muted">Your name here.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAgeModal">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Age"
                value={editAge}
                onChange={ (e) => {setEditAge(e.target.value)}}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckboxModal">
                <Form.Check type="checkbox" label="is active?"
                checked={editIsActive === 1 ? true : false}
                onChange={ (e) => {editIsActive === 1? setEditIsActive(0) : setEditIsActive(1) }}
                value={editIsActive}
                />
            </Form.Group>

            
        </Form>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>

      </Modal>

    <Card className="m-4 p-4">
      <Form>
            <Form.Group className="mb-3" controlId="formBasicNameForm">
                <Form.Label>Name x</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter name" 
                value={name}
                onChange={ (e) => {setName(e.target.value)}}
                />
                <Form.Text className="text-muted">Your name here.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAgeForm">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" placeholder="Age"
                value={age}
                onChange={ (e) => {setAge(e.target.value)}}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckboxForm">
                <Form.Check type="checkbox" label="is active?"
                checked={isActive === 1 ? true : false}
                onChange={ (e) => {handleIsActiveChange(e)}}
                value={isActive}
                />
            </Form.Group>

            <Button variant="primary" onClick={ () => { handleSave()}}>
                Save Changes
            </Button>
        </Form>

        </Card>
        <ToastContainer />

    </>

    )

}

export default Crud;