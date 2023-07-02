import React, { useState } from "react";

function Average1() {

    const [num, setNum] = useState(0);

    const x1 = 2;
    const x2 = 4;
    const x3 = 8;
    const x4 = 10;

    function handleAdd() {
        setNum((x1+x2+x3+x4)/4);
    }

    function handleMultiple() {
        setNum(num * 2);
    }

    return (
        <>
            <h1>hallo {num}</h1>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleMultiple}>duplicate</button>
        </>
    );
}

export default Average1;