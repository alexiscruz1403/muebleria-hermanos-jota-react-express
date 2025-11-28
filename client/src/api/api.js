import axios from "axios";

const BASE_URL = "https://muebleria-hermanos-jota-react-express.onrender.com/api";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// 🔸 Interceptor opcional: para agregar token automáticamente
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
