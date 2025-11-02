const API_URL = "https://muebleria-hermanos-jota-react-expre-iota.vercel.app/api";

export const deleteProduct = async (id) => {
    try{
        await fetch(`${API_URL}/products/${id}`, {
            method: "DELETE",
        });
    }catch(error){
        throw new Error("Error deleting product");
    }
}