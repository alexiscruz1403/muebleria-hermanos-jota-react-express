const API_URL = "https://muebleria-hermanos-jota-react-expre-iota.vercel.app/api";

export const createProduct = async (productData) => {
    try{
        const response = await fetch(`${API_URL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });
        const data = await response.json();
        return data;
    }catch(error){
        throw new Error("Error creating product");
    }
}