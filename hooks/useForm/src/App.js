import React, { useRef } from 'react';
import useForm from './hooks/useForm';

function App() {

  const [data, handleChange] = useForm({
    name: "",
    email: "",
    password: ""
  });

  const useRefInput1 = useRef();
  const useRefInput2 = useRef();
  const useRefInput3 = useRef();

  function handleOnClick1(){
    useRefInput1.current.focus();
  }
  function handleOnClick2(){
    useRefInput1.current.placeholder= "hallo welt";
  }
  function handleOnClick3(){
    let x1 = useRefInput3.current.value;
    console.log(x1);
  }
  function handleOnClick4(){
    console.log(useRefInput1.current.value, useRefInput2.current.value, useRefInput3.current.value);
  }

  return (
    <div className="App">
      
      <input
        ref={useRefInput1}
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <br/>
      <input
        ref={useRefInput2}
        name="email"
        placeholder="email"
        value={data.email}
        onChange={handleChange}
        />
      <br/>
      <input
        ref={useRefInput3}
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <br/>
      <button onClick={handleOnClick1}>focus</button>
      <br/>
      <button onClick={handleOnClick2}>placeholder</button>
      <br/>
      <button onClick={handleOnClick3}>get data from only the 3rd button</button>
      <br/>
      <button onClick={handleOnClick4}>get all data from all buttons</button>
    </div>

  );
}

export default App;
