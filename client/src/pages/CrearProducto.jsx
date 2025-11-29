import "../css/AdminForm.css";
import { useState } from "react";
import { ProductForm } from "../components/ProductForm/ProductForm";
import { useNavigate } from "react-router-dom";
import { createProduct, createProductImage } from "../services/productService";
import { SnackBar } from "../components/SnackBar/SnackBar";
import { LoaderModal } from "../components/LoaderModal";

export const CrearProducto = () => {
    const navigate = useNavigate();
    const [snackbarMessage, setSnackbarMessage] = useState("Mensaje por defecto");
    const [snackbarType, setSnackbarType] = useState("success");
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (productData) => {
        try{
            setLoading(true);
            const created = await createProduct(productData);
            if(productData.imgFile){
                await createProductImage(created.id, productData.imgFile);
            }
            setSnackbarMessage("Producto creado exitosamente");
            setSnackbarType("success");
            setShowSnackbar(true);
            setTimeout(() => {
                setShowSnackbar(false)
                navigate('/products');
            }, 2000);
            return;
        }catch(error){
            setSnackbarMessage("Error al crear el producto");
            setSnackbarType("error");
            setShowSnackbar(true);
            setTimeout(() => setShowSnackbar(false), 3000);
            return;
        }finally{
            setLoading(false);
        }
    }

    return(
        <div className="admin-form-container">
            <h2 className="text-2xl font-bold">Crear Producto</h2>
            <ProductForm onSubmit={handleSubmit} />
            {showSnackbar && <SnackBar message={snackbarMessage} type={snackbarType} />}
            {loading && <LoaderModal />}
        </div>
    );
}