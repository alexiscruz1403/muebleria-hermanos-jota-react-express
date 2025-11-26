import api from "../api/api";

export const getAllProducts = async (search) => {
    try {
        const response = await api.get('/products', {
            params: { search }
        });
        return response.data;
    } catch (error) {
        console.error('Error obteniendo productos:', error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await api.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error obteniendo producto con id ${id}:`, error);
        throw error;
    }
};

export const getDestacados = async () => {
    try {
        const response = await api.get('/products/destacados');
        return response.data;
    } catch (error) {
        console.error('Error obteniendo productos destacados:', error);
        throw error;
    }
};

export const createProduct = async (productData) => {
    try {
        const response = await api.post('/products', productData);
        return response.data;
    } catch (error) {
        console.error('Error creando producto:', error);
        throw error;
    }
};

export const updateProduct = async (id, productData) => {
    try {
        const response = await api.put(`/products/${id}`, productData);
        return response.data;
    } catch (error) {
        console.error(`Error actualizando producto con id ${id}:`, error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        await api.delete(`/products/${id}`);
    } catch (error) {
        console.error(`Error eliminando producto con id ${id}:`, error);
        throw error;
    }
};

export const createProductImage = async (productId, imageFile) => {
    try{
        const formData = new FormData();
        formData.append("image", imageFile);
        const response = await api.post(`/products/${productId}/image`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    }catch(error){
        console.error("Error creando imagen de producto:", error);
        throw error;
    }
}