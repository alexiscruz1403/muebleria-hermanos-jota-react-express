import "../css/AdminForm.css";
import { ProductForm } from "../components/ProductForm/ProductForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById, updateProduct, createProductImage } from "../services/productService";
import { SnackBar } from "../components/SnackBar/SnackBar";

export const ActualizarProducto = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const [snackbarType, setSnackbarType] = useState("success");
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [showSnackbar, setShowSnackbar] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const product = await getProductById(id);
                const mappedSpecs = Object.keys(product.especificaciones).map(key => ({
                    label: key,
                    value: product.especificaciones[key],
                }))
                setProductData({ ...product, especificaciones: mappedSpecs });
            }catch(error){
                navigate('/products');
            }
        }

        fetchData();
    }, [id]);

    const handleSubmit = async (updatedProduct) => {
        try{
            await updateProduct(productData.id, updatedProduct);
            if(updatedProduct.imgFile){
                await createProductImage(productData.id, updatedProduct.imgFile);
            }
            setSnackbarMessage("Producto actualizado correctamente");
            setSnackbarType("success");
            setShowSnackbar(true);
            setTimeout(() => {
                setShowSnackbar(false)
                navigate('/products/'+productData.id);
            }, 2000);
        }catch(error){
            setSnackbarMessage("Error al actualizar el producto");
            setSnackbarType("error");
            setShowSnackbar(true);
            setTimeout(() => setShowSnackbar(false), 3000);
            return;
        }
    }

    return(
        <div className="admin-form-container">
            <h2 className="font-bold text-2xl">Actualizar Producto</h2>
            {productData &&
                <ProductForm onSubmit={handleSubmit} defaultValues={productData}/>
            }
            {showSnackbar && (
                <SnackBar message={snackbarMessage} type={snackbarType} />
            )}
        </div>
    );
}