import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contrasenia: { type: String, required: true },
});

export const Usuario = mongoose.model("Usuario", usuarioSchema);