import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { logger } from "./middlewares/logger.js";
import productsRouter from "./routes/products.routes.js";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config(); // carga las variables del .env

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// Conexión a MongoDB
await mongoose.connect(process.env.DB_URI)
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));
console.log("Base actual:", mongoose.connection.name);

app.use(cors());
app.use(express.json());
app.use(logger);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads"); // carpeta donde se guarda
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

// API routes
app.use("/api/productos", productsRouter);

// Servir React build
app.use(express.static(path.join(__dirname, "../../client/build")));

// Servir imágenes estáticas
app.use("/uploads", express.static("public/uploads"));

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
