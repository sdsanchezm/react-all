import React, { useState, useEffect } from 'react';
import { getChars, addNumbers } from './helpers/getData1';

const URL1 = `https://rickandmortyapi.com/api/character/1,2,3`;

function App() {

  // function getChars(){
  //   fetch(URL1)
  //   .then( (response) => response.json() )
  //   .then( (data) => console.log(data) )
  // }

  async function getCharsHelper(URL1){
    let data1 = await getChars(URL1);
    console.log(`data1: ${data1}`);
    console.log(data1);
  }

  function addNumbersHelper(a, b){
    let sumOfNumbers = addNumbers(a, b);
    console.log(sumOfNumbers);
    // return sumOfNumbers;
  }
  
  useEffect(() => {
    getCharsHelper(URL1);
    addNumbersHelper(10,11);
  }, []);

  return (
    <div className="App">

      <h4>helpers</h4>

    </div>

  );
}

export default App;
