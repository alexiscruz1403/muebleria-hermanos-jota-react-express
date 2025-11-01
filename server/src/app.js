import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { logger } from "./middlewares/logger.js";
import productsRouter from "./routes/products.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;
const DB_URI =
  "mongodb+srv://javier:muebleria2025@cluster0.um4caoa.mongodb.net/MuebleriaJota?retryWrites=true&w=majority";

// Conexión a MongoDB
mongoose
  .connect(DB_URI)
  .then(() => {
   console.log("Conexión exitosa a MongoDB");

   const db = mongoose.connection.db;
   console.log("Base de datos actual:", db.databaseName);

   db.listCollections()
     .toArray()
     .then((collections) => {
       console.log(
         "Colecciones disponibles:",
         collections.map((c) => c.name)
       );

       if (collections.some((c) => c.name === "products")) {
         db.collection("products")
           .find()
           .toArray()
           .then((products) => {
             console.log("Productos en la colección 'products':", products);
           })
           .catch((err) => console.error("Error al obtener productos:", err));
       } else {
         console.log(
           "La colección 'products' no existe en esta base de datos."
         );
       }
     })
     .catch((err) => console.error("Error al listar colecciones:", err));

  })
  .catch((err) => console.error("Error de conexión", err));

app.use(cors());
app.use(express.json());
app.use(logger);

// API routes
app.use("/api/productos", productsRouter);

// Servir React build
app.use(express.static(path.join(__dirname, "../../client/build")));

// 
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

// Manejo de errores 404 y 500
app.use((req, res) => {
  res.status(404).json({ message: "Recurso no encontrado" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
