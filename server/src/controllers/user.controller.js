import { Usuario } from "../models/Usuario.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../../utils/jwt.util.js";

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { nombre, currentPassword, newPassword } = req.body;

    const updates = {};

    // Si quiere cambiar el nombre
    if (nombre) {
      updates.nombre = nombre;
    }
    // Validar nueva contraseña 
    if (newPassword && newPassword.length < 8) {
      return res.status(400).json({
        message: "La contraseña nueva debe tener al menos 8 caracteres",
      });
    }

    //Si quiere cambiar contraseña
    if (currentPassword && newPassword) {
      const user = await Usuario.findById(userId);

      const isMatch = bcrypt.compareSync(currentPassword, user.contrasenia);
      if (!isMatch) {
        return res
          .status(401)
          .json({ message: "La contraseña actual es incorrecta" });
      }

      const salt = bcrypt.genSaltSync(10);
      updates.contrasenia = bcrypt.hashSync(newPassword, salt);
    }

    // Si no envió nada para actualizar
    if (Object.keys(updates).length === 0) {
      return res
        .status(400)
        .json({ message: "No se enviaron campos para actualizar" });
    }

    const updatedUser = await Usuario.findByIdAndUpdate(userId, updates, {
      new: true,
    });

    const token = generateToken(updatedUser);

    return res.json({
      message: "Perfil actualizado con éxito",
      user: {
        nombre: updatedUser.nombre,
        email: updatedUser.email,
      },
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor", error });
  }
};
