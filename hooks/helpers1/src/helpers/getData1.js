
// const URL1 = `https://rickandmortyapi.com/api/character/1,2,3`;

function getChars(urlx1){
    return fetch(urlx1)
    .then( (response) => response.json() )
  }

function addNumbers(a, b){
    return a + b;
}

export { getChars, addNumbers };