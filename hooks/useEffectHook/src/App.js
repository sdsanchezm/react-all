import React, { useEffect, useState } from 'react';
import CharacterCard from './components/CharacterCard';

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1,2,3')
      .then(response => response.json())
      .then(data => setCharacters(data)) // sometimes data.results, not the case here
      .then(data => console.log(characters[0].name))
      .catch(err => { console.error(err) })
  }, []);


  return (
    <div className="App">
      <ul>
        {characters.map(item => (
          // <li key={item.id}>{item.name}</li>
          <CharacterCard props={item} />
        ))}
      </ul>
    </div>

  );
}

export default App;
