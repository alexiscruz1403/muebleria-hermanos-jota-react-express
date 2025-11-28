import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { logger } from "./middlewares/logger.js";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import dotenv from "dotenv";

// Rutas
import productsRouter from "./routes/products.routes.js";
import authRouter from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config(); // carga las variables del .env

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

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

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

// API routes
app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRoutes);

// Servir imágenes estáticas
app.use("/uploads", express.static("public/uploads"));

// Manejo de errores 404 y 500
app.use((req, res) => {
  res.status(404).json({ message: "Recurso no encontrado" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Error interno del servidor" });
});

const startServer = async () => {
  try {
    console.log("Intentando conectar a MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("✅ Conexión exitosa a MongoDB");
    console.log("Base actual:", mongoose.connection.name);

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error);
  }
};

startServer();

export default app;
