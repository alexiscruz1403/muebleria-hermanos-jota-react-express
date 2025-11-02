const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const updateProduct = async (id, product) => {
    try{
        const response = await fetch(`${API_URL}/api/products/${id}`, {
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