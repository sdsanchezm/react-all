import { useParams } from "react-router-dom";


function Product(){
    const { id } = useParams();

    return (
    <div>
        <h3>this is: Product - id: {id}</h3>
    </div>
    )
}

export default Product;