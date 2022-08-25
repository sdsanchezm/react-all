import React, { useEffect, useState } from 'react';
import { UserService } from '../services/UserService';
import { Col, Row, Container, Card, Form, Button, Table } from 'react-bootstrap';

let UserList = () => {

    let [state, setState] = useState({
        users: []
    });


    useEffect( () => {
        UserService.getAllUsers().then((response) => {
            setState({
                ...state,
                users: response.data
            })
        }).catch( (error) => {
            console.log(error);
        });
    }, [])


    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col>
                    <h3>List</h3>
                    <p>Text</p>
                    </Col>
                </Row>
                <Table striped bordered hover className="shadow-lg">
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Location</th>
                    </thead>
                    <tbody>
                        {
                            state.users.length > 0 &&
                            state.users.map( user => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                        <td>{user.company.name}</td>
                                        <td>{user.address.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default UserList;