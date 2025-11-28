// client/src/pages/ProductDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailCard } from "../components/ProductDetailCard/ProductDetailCard";
import { getProductById } from "../services/productService";
import { LoaderModal } from "../components/LoaderModal";
import { SnackBar } from "../components/SnackBar/SnackBar";

export const ProductDetail = () => {
  const { id } = useParams(); // 👈 importante: debe coincidir con la ruta "/products/:id"
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSnackBar, setShowSnackBar] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) return; // evita fetch undefined
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error al obtener producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const onAddToCart = () => {
    setShowSnackBar(true);
    setTimeout(() => {
      setShowSnackBar(false);
    }, 3000);
  }

  if (!loading && !product) return <h1>Producto no encontrado</h1>;

  return (
    <div>
      {!loading && product && (
        <ProductDetailCard product={product} onAddToCart={onAddToCart} />
      )}
      {showSnackBar && (
        <SnackBar
          message="Producto añadido al carrito"
          type="success"
        />
      )}
      {loading && <LoaderModal />}
    </div>
  );
};
