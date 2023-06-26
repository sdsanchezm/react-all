import React, { useState, useRef } from 'react';

function UseRefComponent() {

    const useRefInput1 = useRef();
    const useRefInput2 = useRef();
    const useRefInput3 = useRef();

    const value1 = {
        name: "",
        email: "",
        password: ""
    }

    const [data1, setData1] = useState(value1);

    function handleOnClick1() {
        useRefInput1.current.focus();
    }

    function handleOnClick2() {
        useRefInput1.current.placeholder = "hello";
    }

    function handleOnClick3() {
        let x1 = useRefInput3.current.value;
        console.log(x1);
    }

    function handleOnClick4() {
        console.log(useRefInput1.current.value, useRefInput2.current.value, useRefInput3.current.value);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData1({
            ...data1,
            [name]: value
        });
    }

    return (
        <div className="App">

            <input
                ref={useRefInput1}
                name="name"
                value={data1.name}
                onChange={handleChange}
            />
            <br />
            <input
                ref={useRefInput2}
                name="email"
                placeholder="email"
                value={data1.email}
                onChange={handleChange}
            />
            <br />
            <input
                ref={useRefInput3}
                type="password"
                name="password"
                value={data1.password}
                onChange={handleChange}
            />
            <br />
            <button onClick={handleOnClick1}>focus</button>
            <br />
            <button onClick={handleOnClick2}>placeholder</button>
            <br />
            <button onClick={handleOnClick3}>get data from 3rd button</button>
            <br />
            <button onClick={handleOnClick4}>get all data from all buttons</button>
        </div>

    );
}

export default UseRefComponent;