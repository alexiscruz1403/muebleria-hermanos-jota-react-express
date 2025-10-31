import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  especificaciones: { type: Object },
  img: {
    src: { type: String },
    alt: { type: String },
  },
  precio: { type: Number, required: true },
});

export const Product = mongoose.model("Product", productSchema);
