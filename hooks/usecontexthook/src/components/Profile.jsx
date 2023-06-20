import React, { useContext } from 'react';
import ProfileContext from '../context/ProfileContext';

function Profile(){

    const { username, setShowProfile } = useContext(ProfileContext);

    return (
        <div>
            <h1>Profile</h1>
            <h2>Username: {username} </h2>
            <button onClick={ () => setShowProfile(true)}>qwe</button>
        </div>
    )
}

export default Profile;