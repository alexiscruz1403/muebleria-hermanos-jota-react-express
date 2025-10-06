const API_URL = 'https://muebleria-hermanos-jota-react-expre-iota.vercel.app/api';

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