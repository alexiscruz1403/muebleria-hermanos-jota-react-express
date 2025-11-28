import { Pedido } from "../models/Pedido.model.js";

//Obtener pedidos del usuario

export const getMisPedidos = async (req, res) => {
  try {
    const userId = req.user.id;

    const pedidos = await Pedido.find({ usuario: userId });

    return res.json({ pedidos });
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor", error });
  }
};


//Crear un nuevo pedido

export const crearPedido = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productos, total } = req.body;

    if (!productos || productos.length === 0) {
      return res.status(400).json({ message: "El carrito está vacío" });
    }

    const nuevoPedido = new Pedido({
      usuario: userId,
      productos,
      total,
    });

    await nuevoPedido.save();

    return res.json({
      message: "Pedido creado con éxito",
      pedido: nuevoPedido,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error al crear pedido", error });
  }
};
