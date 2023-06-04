import React, { useState } from "react";
import ChangeColor from "./components/ChangeColor";

function App() {

  const [color1, setColor1] = useState("");

  const getColor = (value) => {
    setColor1(value);
  }


  return (
    <div className="App">
      <div
        className="asd"
        style={{ background: `${color1}`, height: '100px' }}
      ></div>
      <ChangeColor updateColorFromParent={getColor} />
    </div>
  );
}

export default App;
