import React, { useContext } from 'react';
import ProfileContext from '../context/ProfileContext';

function Login(){

const { setShowProfile } = useContext(ProfileContext);

return (
        <div>
            <h1>This is Login</h1>
            <button onClick={ () => setShowProfile(true)}>zxc</button>
        </div>
    )
}

export default Login;