import express from "express";
import cors from "cors";
import { logger } from "../src/middlewares/logger.js";
import productsRouter from "../src/routes/products.routes.js";

const app = express();

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'https://muebleria-hermanos-jota-react-expre.vercel.app']
}));
app.use(express.json());
app.use(logger);

// Health check - debe ir antes que las rutas de productos
app.get("/api", (req, res) => {
    res.json({ message: "API funcionando correctamente" });
});

// API routes
app.use("/api/productos", productsRouter);

// Manejo de errores 404
app.use((req, res) => {
    if (req.path.startsWith("/api")) {
        return res.status(404).json({ message: "Endpoint no encontrado" });
    }
    res.status(404).send("Not found");
});

// Manejo de errores 500
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor" });
});

// Export the Express API for Vercel
export default app;