import React from 'react';
import BannerImage from './BannerImage';
import './App.css';

import AlbumMaker from './AlbumMaker';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <BannerImage />
                <div>
                    <h1>Willkommen!</h1>
                    <h3>Sergio Sanc!</h3>
                    <AlbumMaker />
                </div>
                <a className="App-Link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
                </a>
            </header>
        </div>
    )

}

export default App;
