import React, { useState } from 'react';
import { Col, Row, Container, Card, Button } from 'react-bootstrap';

let Counter = () => {

    let [state, setState] = useState(
        {
            count: 0
        }
    );

    const increment1 = () => {
        setState(
            {
                count: state.count + 1
            }
        );
    }


    const decrement1 = () => {
        setState(
            {
                count: state.count - 1
            }
        );
    }


    return (
        <>
            <Container >
                <Row>
                    <Col xs={4}>
                        <Card className="shadow-lg">
                            <Card.Body>
                                <p className="display-2">{state.count}</p>
                                <Button onClick={decrement1} variant="warning" className='m-1'>Decrement</Button>
                                <Button onClick={increment1} variant="success" className='m-1'>Increment</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Counter;