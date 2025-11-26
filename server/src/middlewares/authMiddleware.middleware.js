import { verifyToken } from "../../utils/jwt.util.js";

export const authMiddleWare = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) return res.status(401).json({ message: "No se proporcionó un token de autenticación" });

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    if (!decoded) return res.status(401).json({ message: "Token de autenticación inválido o expirado" });
    
    req.user = decoded;
    next();
}