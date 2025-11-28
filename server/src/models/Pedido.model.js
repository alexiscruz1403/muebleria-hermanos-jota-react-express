import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
    productos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true }],
    total: { type: Number, required: true },
    fecha: { type: Date, default: Date.now },
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
});
export const Pedido = mongoose.model("Pedido", pedidoSchema);