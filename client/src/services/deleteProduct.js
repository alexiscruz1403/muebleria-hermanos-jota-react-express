const API_URL = "http://localhost:4000/api";

export const deleteProduct = async (id) => {
    try{
        await fetch(`${API_URL}/productos/${id}`, {
            method: "DELETE",
        });
    }catch(error){
        throw new Error("Error deleting product");
    }
}