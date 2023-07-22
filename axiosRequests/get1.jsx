import React, { useEffect, useState } from 'react';

function ComponentExample() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const axiosInstance = axios.create({

        baseURL: 'https://example.com/api',

        headers: {
          'Authorization': 'Bearer TOKEN_HERE',
          'Content-Type': 'application/json',
        },

      });

    useEffect(() => {

        const fetchData = async () => {

            try {

                const response = await axiosInstance.get('/endpointpath');
                setData(response.data);
                setLoading(false);

            } catch (error) {

                console.error('An error ocurred when fetching data:', error);
                setLoading(false);

            }
        };

        fetchData();
    }, []);

    if (loading) {

        return <div>Loading...</div>;

    }

    return (

        <div>
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>

    );
};

export default ComponentExample;
