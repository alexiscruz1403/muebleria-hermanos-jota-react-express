const API_URL = "http://localhost:4000/api";

export const getDestacados = async () => {
    try {
        const response = await fetch(`${API_URL}/productos/destacados`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Error fetching destacado products");
    }
};