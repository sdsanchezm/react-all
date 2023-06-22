import { Link } from "react-router-dom";

function ProductList(){

    return (
    <div>
        <h3>this is: ProductList</h3>
            <Link to="/products/1">Product 1</Link>
            <br />
            <Link to="/products/2">Product 2</Link>
            <br />
            <Link to="/products/new">new Product</Link>
    </div>
    )
}

export default ProductList;