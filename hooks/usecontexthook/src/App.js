import React, { useState } from 'react';
import Profile from './components/Profile';
import Login from './components/Login';
import ProfileContext from './context/ProfileContext';

function App() {

  const [number, setNumber] = useState(0);
  const [showProfile, setShowProfile] = useState(true);
  const [username, setUsername] = useState("super name");

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

      <button onClick={ () => setShowProfile(false)}>change</button>

      <ProfileContext.Provider value={{ username, setUsername, setShowProfile }}>
        {showProfile? <Login /> : <Profile />}
      </ProfileContext.Provider>


    </div>

  );
}

export default App;
