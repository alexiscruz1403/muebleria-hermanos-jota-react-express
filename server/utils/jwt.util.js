import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET || "default_secret_key";

export const generateToken = (user) => {
    return jwt.sign({ id: user._id, nombre: user.nombre, email: user.email, rol: user.rol }, SECRET_KEY, { expiresIn: '1d' });
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
}