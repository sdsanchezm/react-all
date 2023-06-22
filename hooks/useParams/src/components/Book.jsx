import { useParams } from "react-router-dom";

function Book(){
    const { id } = useParams();
    return (
        <h1>This is: Book - id: {id}</h1>
    )
}

export default Book;