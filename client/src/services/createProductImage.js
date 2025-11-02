const API_URL = "https://muebleria-hermanos-jota-react-expre-iota.vercel.app/api";

export const createProductImage = async (productId, imageFile) => {
    try{
        const formData = new FormData();
        formData.append("image", imageFile);

        const response = await fetch(`${API_URL}/products/${productId}/image`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Error al subir la imagen");
        }

        const data = await response.json();
        return data;
    }catch(error){
        throw new Error("Error creating product image");
    }
}