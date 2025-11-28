import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  productos: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  ],
  total: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});
export const Pedido = mongoose.model("Pedido", pedidoSchema);