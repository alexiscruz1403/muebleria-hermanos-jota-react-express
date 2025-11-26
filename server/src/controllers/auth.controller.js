import { Usuario } from "../models/Usuario.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/jwt.util.js";

export const register = async (req, res) => {
    try {
        const { nombre, email, contrasenia } = req.body;

        const existingUser = await Usuario.findOne({ email });
        if(existingUser) res.status(400).json({ message: "El correo electrónico ya está registrado" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(contrasenia, salt);

        const newUser = new Usuario({
            nombre,
            email,
            contrasenia: hashedPassword,
        });
        await newUser.save();

        const token = generateToken(newUser);

        res.status(201).json({ message: "Usuario registrado exitosamente", user: { nombre: newUser.nombre, email: newUser.email }, token });
    }catch (error) {
        res.status(500).json({ message: "Error al registrar usuario", error });
    }
}

export const login = async (req, res) => {
    try{
        const { email, contrasenia } = req.body;

        const user = await Usuario.findOne({ email });
        if(!user) return  res.status(400).json({ message: "Correo electrónico o contraseña incorrectos" });

        const validPassword = await bcrypt.compare(contrasenia, user.contrasenia);
        if(!validPassword) return res.status(400).json({ message: "Correo electrónico o contraseña incorrectos" });

        const token = generateToken(user);

        res.json({ message: "Inicio de sesión exitoso", user, token });
    }catch(error){
        res.status(500).json({ message: "Error al iniciar sesión", error });
    }
}