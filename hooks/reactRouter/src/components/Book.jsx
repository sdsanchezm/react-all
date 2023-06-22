import { useOutletContext, useParams } from "react-router-dom";

function Book(){
    const { id } = useParams();
    // the useOutletContext() hook allows to grab the value fro mthe Outlet component defined into BookLayout
    // and use it into the return here
    const obj = useOutletContext(); 

    return (
        <h1>
            This is: Book - id: {id} - {obj.hello}
        </h1>
    )
}

export default Book;