import { useState, useEffect } from "react";
import { ProductDetailCard } from "../components/ProductDetailCard/ProductDetailCard";
import { getProduct } from "../services/getProduct";

export const ProductDetail = ({ productId, onAddToCart }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
        const data = await getProduct(productId);
        setProduct(data);
        };
        
        fetchProduct();
    
    }, [productId]);

    if (!product) return <div><h1>Product no encontrado</h1></div>;

    return (
        <div>
            <ProductDetailCard product={product} onAddToCart={onAddToCart} />
        </div>
    );
};
