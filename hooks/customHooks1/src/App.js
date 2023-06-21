import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import CharacterCard from './components/CharacterCard';
import SearchComponent from './components/SearchComponent';
import useCharacters from './hooks/useCharacters';

const initialState = {
  favorites: []
};

const URL1 = `https://rickandmortyapi.com/api/character/1,2,3`;

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

  // const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  // const [val, setVal] = useState(0);
   const searchInput = useRef(null);

// HERE!
// no need to import useEffect, or use a state for this, why? because is packed into the useCharacter custom hook
const characters = useCharacters(URL1);


  function handleClick1(favorite) {
    dispatch({ type: 'ADD_TO_FAVS', payload: favorite })
  }

  // useMemo, helps when a function is pretty slow or intense-processing
  const filteredUsers = useMemo( () =>
    characters.filter( user => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    },
      [characters, search])
  );

const handleSearch1 = (event) => {
  setSearch(event.target.value);
};

const handleSearch2 = () => {
  setSearch(searchInput.current.value);
};

const handleSearch3 = useCallback( () => {
  setSearch(searchInput.current.value);
}, []);

  // const getDouble = useMemo(() => {
  //   return superSlowFunction(val);
  // },
  //   [val]);

function superSlowFunction(var1){
  console.log("calling slow function");
  for(let j = 1; j < 10000000; j++ ){
    return var1 * 2;
  }
};

  return (
    <div className="App">

      <SearchComponent searchA={search} searchInputA={searchInput} handleSearchA={handleSearch3} />

      {/* <input value={search} placeholder='type here' onChange={handleSearch1}></input> */}

      {/* <input type="text" value={search} ref={searchInput} onChange={handleSearch2}></input> */}

      {favorites.favorites.map((item) => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}

      <ul>
        {filteredUsers.map(item => (
          <li key={item.id}>{item.name} - <button onClick={() => handleClick1(item)}>add to favs</button></li>
          // <CharacterCard props={item} />
        ))}
      </ul>

    </div>

  );
}

export default App;
