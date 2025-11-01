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

    if (!product) res.status(404).json({ message: "Producto no encontrado" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar producto", error });
  }
};

export const createProduct = async (req, res) => {
  try{
    const data = req.body;

    const lastProduct = await Product.findOne().sort({ id: -1 });
    data.id = lastProduct ? lastProduct.id + 1 : 1;

    data.img = {
      alt: "",
      src: ""
    };

    const especificaciones = {};
    data.especificaciones.forEach(spec => {
      especificaciones[spec.label] = spec.value;
    })
    data.especificaciones = especificaciones;

    const newProduct = new Product(data);
    await newProduct.save();
    res.status(201).json(newProduct);
  }catch(error){
    res.status(500).json({ message: "Error al crear producto", error });
  }
}

export const updateProduct = async (req, res) => {
  try{
    const id = req.params.id;
    const data = req.body;

    const especificaciones = {};
    data.especificaciones.forEach(spec => {
      especificaciones[spec.label] = spec.value;
    })

    const updatedProduct = await Product.findOneAndUpdate(
      { id: id },
      {
        nombre: data.nombre,
        precio: data.precio,
        descripcion: data.descripcion,
        especificaciones: especificaciones,
      },
      { new: true }
    );

    if (!updatedProduct) res.status(404).json({ message: "Producto no encontrado" });

    res.json(updatedProduct);
  }catch(error){
    res.status(500).json({ message: "Error al actualizar producto", error });
  }
}

export const createProductImage = async (req, res) => {
  try{
    const id = req.params.id;
    const file = req.file;
    const product = await Product.findOne({ id: id });

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    product.img = {
      src: `/uploads/${file.filename}`,
      alt: product.nombre,
    };
    await product.save();
    res.status(200).json(product);
  }catch(error){
    res.status(500).json({ message: "Error al subir imagen del producto", error });
  }
}

export const deleteProduct = async (req, res) => {
  try{
    const id = req.params.id;
    const deletedProduct = await Product.findOneAndDelete({ id: id });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json({ message: "Producto eliminado correctamente" });
  }catch(error){
    res.status(500).json({ message: "Error al eliminar producto", error });
  }
}