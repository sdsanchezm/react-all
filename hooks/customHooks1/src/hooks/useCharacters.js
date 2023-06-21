import { useState, useEffect } from "react";

const useCharacters = url1 => {
    const [characters, setCharacters] = useState([]);
    useEffect( () => {
        fetch(url1)
        .then(response => response.json())
        .then(data => setCharacters(data))
        .catch(err => console.error(err))
    },[url1]);
    return characters;
}

export default useCharacters;
