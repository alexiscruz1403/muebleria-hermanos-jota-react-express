const API_URL = 'https://muebleria-hermanos-jota-react-expre-iota.vercel.app/api';

export const getProducts = async (search) => {
    try{
        const response = await fetch(`${API_URL}/productos/?search=${search}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}