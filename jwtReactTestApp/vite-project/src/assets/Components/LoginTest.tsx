import { jwtDecode } from 'jwt-decode';
import React, { useState, useEffect } from 'react';


function App(): JSX.Element {
    const [token, setToken] = useState<string>('');
    const [decodedToken, setDecodedToken] = useState<any>(null);

    useEffect(() => {
        const storedToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        setToken(storedToken);
    }, []);

    useEffect(() => {
        if (token) {
            const decoded: any = jwtDecode(token);
            setDecodedToken(decoded);
        }
    }, [token]);

    return (
        <div>
            <h1> Example app - JWT Decoding</h1>
            {token ? (
                <div>
                    <p>Token Encoded : {token}</p>
                    <p>Token Decoded :</p>
                    <pre>{JSON.stringify(decodedToken, null, 2)}</pre>
                </div>
            ) : (
                <p>token not found.</p>
            )}
        </div>
    );
}

export default App;
