import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  especificaciones: { type: Object },
  img: {
    src: { type: String },
    alt: { type: String },
  },
  precio: { type: Number, required: true },
});

export const Product = mongoose.model("Product", productSchema);
