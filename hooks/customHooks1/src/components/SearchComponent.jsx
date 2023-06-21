import React from "react";

function SearchComponent ({searchA, searchInputA, handleSearchA}){

    return (
            <input type="text" value={searchA} ref={searchInputA} onChange={handleSearchA} />
    )
}

export default SearchComponent;