import React, { useEffect, useState, useReducer } from 'react';
import CharacterCard from './components/CharacterCard';

const initialState = {
  favorites: []
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVS':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}

function App() {

  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1,2,3')
      .then(response => response.json())
      .then(data => setCharacters(data)) // sometimes data.results, not the case here
      .then(data => console.log(characters[0].name))
      .catch(err => { console.error(err) })
  }, []);


  function handleClick1(favorite) {
    dispatch({ type: 'ADD_TO_FAVS', payload: favorite })
  }


  return (
    <div className="App">

      {favorites.favorites.map((item) => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}

      <ul>
        {characters.map(item => (
          <li key={item.id}>{item.name} - <button onClick={() => handleClick1(item)}>add to favs</button></li>
          // <CharacterCard props={item} />
        ))}
      </ul>

      {/* <ProfileContext.Provider value={{ setShowProfile }}>
        {showProfile? <h4>hey</h4> : <h4>bye</h4>}
      </ProfileContext.Provider> */}



    </div>

  );
}

export default App;
