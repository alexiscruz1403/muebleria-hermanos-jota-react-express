const API_URL = "https://muebleria-hermanos-jota-react-expre-iota.vercel.app/api";

export const getDestacados = async () => {
  try {
    const response = await fetch(`${API_URL}/productos/destacados`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching destacado products");
  }
};