const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const createProductImage = async (productId, imageFile) => {
    try{
        const formData = new FormData();
        formData.append("image", imageFile);

        const response = await fetch(`${API_URL}/api/products/${productId}/image`, {
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