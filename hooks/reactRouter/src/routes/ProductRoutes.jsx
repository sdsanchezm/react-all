import { Route, Routes } from "react-router-dom";
import ProductList from "../components/products/ProductList";
import Product from "../components/products/Product";
import NewProduct from "../components/products/NewProduct";

function BookRoutes(){

    return(
        <div>
            <Routes>
                <Route index element={<ProductList />} />
                <Route path=":id" element={<Product />} />
                <Route path="new" element={<NewProduct />} />
            </Routes>
        </div>
    )
}

export default BookRoutes;