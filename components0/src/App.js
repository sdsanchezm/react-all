import Form from './Form';

const movies = [
    {
        name: 'avengers',
        avail: 4,
    },
    {
        name: 'terminator',
        avail: 5,
    },
    {
        name: 'bigbang',
        avail: 2,
    }
]

export default function App(){

    return(
        <div className="App">
            <h2>MoviesApp</h2>
            {movies.map(movie => (
                <Form movie={movie} />
            ))}
        </div>
    )
}