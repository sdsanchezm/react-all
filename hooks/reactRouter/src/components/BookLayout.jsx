import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

function BookLayout(){
    const [searchParams, setSearchParams] = useSearchParams({ n: 5 });
    // const [number, setNumber] = useState(3);

    const number = searchParams.get('n');

    return (
    <>
        <Link to="/books/1">Book 1</Link>
        <br />
        <Link to="/books/2">Book 2</Link>
        <br />
        <Link to={`/books/${number}`}>Book {number}</Link>
        <br />
        <Link to="/books/new">new</Link>
        <Outlet context={{ hello: "Welt" }}/>
        <input type="number" value={number} onChange={e => setSearchParams({ n: e.target.value }) }></input>
    </>
    )
}

export default BookLayout;