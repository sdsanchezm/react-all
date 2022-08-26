import React from 'react';
import './App.css';
import { Button, Alert, Badge, Container, Navbar } from 'react-bootstrap';

import Counter from './components/Counter';
import Registration from './components/Registration';
import UserList from './components/UserList';

let App = () => {
  return (
    <>
    <Navbar bg="dark" expand="sm" variant="dark">
      <Container>
        <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
      </Container>
    </Navbar>

  <Registration />

    </>
  )
};

export default App;
