const API_URL = "http://localhost:4000/api";

export const updateProduct = async (id, product) => {
    try{
        const response = await fetch(`${API_URL}/productos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        return data;
    }catch(error){
        throw new Error("Error updating product");
    }
}