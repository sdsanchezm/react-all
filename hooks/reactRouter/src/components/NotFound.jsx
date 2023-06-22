import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound(){

    const navigate = useNavigate();
    
    useEffect( () => {
        setTimeout(() => {
            navigate("/");
            // -1 navigates automatically to the previous page in history 
            //navigate(-1)
        }, 3000);
    }, []);

    return (
        <h1>This is: NotFound</h1>    
    )
}

export default NotFound;