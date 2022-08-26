import React, { useState } from 'react';
import { Col, Row, Container, Card, Form, Button } from 'react-bootstrap';

let Registration = () => {

    let [state, setState] = useState(
        {
            user: {
                username: '',
                email: '',
                password: ''
            }
        }
    );

    let updateInput = (e) => {
        setState({
            ...state,
            user: {
                ...state.user,
                [e.target.name] : e.target.value
            }
        });
    }

    let register = (e) => {
        e.preventDefault();
        console.log(state.user);
    }

    return (
        <>
        <pre>{JSON.stringify(state)}</pre>
            <Container className="mt-3">
                <Row>
                    <Col md={3}>
                            <Card className="shadow-lg">
                                <Card.Header className="p-3" style={{backgroundColor: 'orange'}}>
                                    <h4>Register</h4>
                                </Card.Header>
                                <Card.Body style={{backgroundColor: '#F7F5F0'}}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicUsername">
                                            <Form.Control
                                            type="text"
                                            name="username"
                                            onChange={updateInput}
                                            placeholder="Username" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control 
                                            name="email"
                                            onChange={updateInput}
                                            type="email" placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control
                                            name="password"
                                            onChange={updateInput}
                                            type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Button onClick={register} variant="warning" type="submit">Register</Button>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Registration;