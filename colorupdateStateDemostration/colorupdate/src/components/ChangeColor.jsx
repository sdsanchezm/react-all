import React, { useState } from "react";


function ChangeColor({ updateColorFromParent }) {

    const [actualColor, setActualColor] = useState("");

    const handleUpdateColor = (e) => {
        const { value } = e.target;
        // function for the actual component
        setActualColor(value);
        // function that will update the state in the parent component
        updateColorFromParent(value);
    };


  return (
    <div className="App">
      <input 
        type="text"
        id="input"
        aria-label="input"
        onChange={handleUpdateColor}
        value={actualColor}
      />
    </div>
  );
}

export default ChangeColor;
