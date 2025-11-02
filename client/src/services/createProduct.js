const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const createProduct = async (productData) => {
    try{
        const response = await fetch(`${API_URL}/api/products`, {
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