import { useState, useEffect } from "react";
import { ProductDetailCard } from "../components/ProductDetailCard";

export const ProductDetail = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`http://localhost:4000/api/productos/${productId}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProduct();
    }, [productId]);

    if (!product) return <div>Cargando...</div>;

    return (
        <div>
            <ProductDetailCard product={product} />
        </div>
    );
};
