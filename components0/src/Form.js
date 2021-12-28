import React from 'react';

export default function Form(props){
    const { movie } = props;

    return(
        <form>
            <h3>{movie.name}</h3>
            <button type="button" disabled={0}>-</button>
            {movie.avail}
            <button type="button" disabled={0}>+</button>
        </form>
    );
}
