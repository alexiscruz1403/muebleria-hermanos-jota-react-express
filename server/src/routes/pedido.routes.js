import { Router } from "express";
import { authMiddleWare } from "../middlewares/auth.middleware.js";
import {
  getMisPedidos,
  crearPedido,
} from "../controllers/pedido.controller.js";

const router = Router();

router.get("/mis_pedidos", authMiddleWare, getMisPedidos);
router.post("/crear_pedido", authMiddleWare, crearPedido);

export default router;
