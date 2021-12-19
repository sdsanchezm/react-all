// import "./styles.css";

import Form from "./Form";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

const movies = [
  {
    name: "avengers",
    available: 6
  },
  {
    name: "the Goodfather",
    available: 2
  }
];

export default function App() {
  return (
    <div>
      <h2>Peliculas</h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
//////////////////////// ESTA ES UNA OPCION ACA PARA NO USAR Forms.js
// export default function App() {
//   return (
//     <div>
//       <h2>Peliculas</h2>
//       {movies.map((movie) => (
//         <form>
//           <h3>{movie.name}</h3>
//           <button type="button"> - </button>0<button type="button"> + </button>
//         </form>
//       ))}
//     </div>
//   );
// }
