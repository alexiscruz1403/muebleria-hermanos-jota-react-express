const API_URL = "http://localhost:4000/api";

export const getProduct = async (id) => {
    try{
        const response = await fetch(`${API_URL}/productos/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
}