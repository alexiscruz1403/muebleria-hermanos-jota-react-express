const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";


export const getProducts = async (search) => {
    try{
        const response = await fetch(`${API_URL}/api/products`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}