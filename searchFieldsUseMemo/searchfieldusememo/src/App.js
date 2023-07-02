import Button from 'react-bootstrap/Button';
import Search1 from './components/Search1';
import React, { useState } from 'react';

function App() {

  const [dataButton, setDataButton] = useState(0);

  function handleClick(e) {
    console.log(e.target.value);
    setDataButton(e.target.value)
  }

  return (
    <div className="container">
      <h4>{dataButton}</h4>
      <hr></hr>
      <Search1 someFunction={handleClick} />
    </div>
  );
}

export default App;
