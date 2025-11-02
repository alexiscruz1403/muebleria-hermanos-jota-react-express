const API_URL = "https://muebleria-hermanos-jota-react-expre-iota.vercel.app/api";

export const updateProduct = async (id, product) => {
    try{
        const response = await fetch(`${API_URL}/products/${id}`, {
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