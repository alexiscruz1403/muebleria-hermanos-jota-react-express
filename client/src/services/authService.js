import api from "../api/api";

export const register = async (nombre, email, contrasenia) => {
    try{
        const response = await api.post("/auth/register", { nombre, email, contrasenia });
        return response.data;;
    }catch(error){
        throw error;
    }
}

export const login = async (email, contrasenia) => {
    try{
        const response = await api.post("/auth/login", { email, contrasenia });
        return response.data;
    }catch(error){
        throw error;
    }
}