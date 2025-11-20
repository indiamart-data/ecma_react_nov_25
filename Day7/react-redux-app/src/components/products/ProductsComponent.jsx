import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";
import ProductListComponent from "./ProductListComponent";

const ProductsComponent = () => {
    const products = useSelector(state => state.products.items);
    const status = useSelector(state => state.products.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle')
            dispatch(fetchProducts());
    }, []);

    return (
        <div>
            <ProductListComponent products={products} />
        </div>
    );
};

export default ProductsComponent;