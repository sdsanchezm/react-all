import React from 'react';
import axios from 'axios';

const ButtonTest = () => {

    const handlePostRequest = () => {
        const url = 'https://example.com/api/endpointpath';
        const data = {
            valueA: 'valueA',
            valueB: 'valueB',
        };

        const headers1 = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer TOKEN_HERE',
        };

        axios
            .post(url, data, { headers1 })
            .then(response => {
                console.log('Response: ', response.data);
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    };


    return (
    
        <button onClick={handlePostRequest}>Post Requests Here</button>

    );
};

export default ButtonTest;
