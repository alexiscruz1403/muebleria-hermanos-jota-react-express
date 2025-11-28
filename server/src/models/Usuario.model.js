import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contrasenia: { type: String, required: true },
    rol: { type: String, enum: ['admin', 'cliente'], default: 'usuario' },
});

export const Usuario = mongoose.model("Usuario", usuarioSchema);