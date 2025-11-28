import { Pedido } from "../models/Pedido.model.js";

//Obtener pedidos del cliente

export const getMisPedidos = async (req, res) => {
  try {
    console.log("Entró a getMisPedidos");
    console.log("Usuario autenticado:", req.user);

    const userId = req.user?.id;

    if (!userId) {
      console.log("No hay userId en req.user");
      return res.status(401).json({ message: "Usuario no autenticado" });
    }

    const pedidos = await Pedido.find({ usuario: userId });

    console.log("Pedidos encontrados:", pedidos);

    return res.json({ pedidos });
  } catch (error) {
    console.error("ERROR en getMisPedidos:", error);
    res
      .status(500)
      .json({ message: "Error al obtener pedidos", error: error.message });
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
