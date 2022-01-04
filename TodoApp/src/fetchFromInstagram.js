import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App(){

    const [ data, setData ] = useState( { hits: [] } )

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios (
                'https://rickandmortyapi.com/api/character/1',
            );
            setData(result.data);
        };
        fetchData();
    }, [] );

    return (
        <ul>
            {data.hits.map(item => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
}

export default App;