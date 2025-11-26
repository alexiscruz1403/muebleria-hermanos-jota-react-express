// client/src/pages/ProductDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailCard } from "../components/ProductDetailCard/ProductDetailCard";
import { getProductById } from "../services/productService";

export const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams(); // 👈 importante: debe coincidir con la ruta "/products/:id"
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) return; // evita fetch undefined
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error al obtener producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <h1>Producto no encontrado</h1>;

  return (
    <div>
      <ProductDetailCard product={product} onAddToCart={onAddToCart} />
    </div>
  );
};
