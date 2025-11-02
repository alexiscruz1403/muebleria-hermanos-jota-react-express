const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";


export const getDestacados = async () => {
  try {
    const response = await fetch(`${API_URL}/api/products/destacados`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching destacado products");
  }
};