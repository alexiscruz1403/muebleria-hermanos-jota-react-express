const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const deleteProduct = async (id) => {
    try{
        await fetch(`${API_URL}/api/products/${id}`, {
            method: "DELETE",
        });
    }catch(error){
        throw new Error("Error deleting product");
    }
}