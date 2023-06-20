import React, { useState } from 'react';

function App() {

  const [number, setNumber] = useState(0);

  function add1(){
    setNumber(number + 1);
  }

  function minus1(){
    setNumber(number - 1);
  }

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={add1}>plus 1</button>
      <button onClick={minus1}>minus 1</button>
    </div>
  );
}

export default App;
