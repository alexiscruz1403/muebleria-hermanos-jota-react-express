import mongoose from "mongoose";
import { Product } from "../models/ProductsModel.js";

export const getProducts = async (req, res) => {
  try {
    console.log("Buscando productos en MongoDB...");
    const search = req.query.search;
    let products;

    if (search) {
      products = await Product.find({
        $or: [
          { nombre: { $regex: search, $options: "i" } },
          { descripcion: { $regex: search, $options: "i" } },
        ],
      });
    } else {
      products = await Product.find();
    }

    console.log("Productos encontrados:", products.length);
    res.json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ message: "Error al obtener productos", error });
  }
};

export const getDestacados = async (req, res) => {
  try {
    console.log("🔹 Conexión a MongoDB:", mongoose.connection.readyState);

    const destacados = await Product.find().limit(5);

    console.log("Destacados encontrados:", destacados);

    res.json(destacados);
  } catch (error) {
    console.error("Error al obtener destacados:", error);
    res
      .status(500)
      .json({ message: "Error al obtener destacados", error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id: Number(req.params.id) });

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar producto", error });
  }
};