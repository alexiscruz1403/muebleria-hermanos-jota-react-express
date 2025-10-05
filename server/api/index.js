import express from "express";
import cors from "cors";
import { logger } from "../src/middlewares/logger.js";
import productsRouter from "../src/routes/products.routes.js";

const app = express();

// Middleware
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://muebleria-hermanos-jota-react-expre.vercel.app'] // Reemplaza con tu dominio frontend
        : ['http://localhost:3000']
}));
app.use(express.json());
app.use(logger);

// API routes
app.use("/api/productos", productsRouter);

// Health check
app.get("/api", (req, res) => {
    res.json({ message: "API funcionando correctamente" });
});

// Manejo de errores 404
app.use("/api/*", (req, res) => {
    res.status(404).json({ message: "Endpoint no encontrado" });
});

// Manejo de errores 500
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor" });
});

// Export the Express API
export default app;