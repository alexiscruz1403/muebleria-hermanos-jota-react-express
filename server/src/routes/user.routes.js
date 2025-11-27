import { Router } from "express";
import { authMiddleWare } from "../middlewares/authMiddleware.middleware.js";
import { updateProfile } from "../controllers/user.controller.js";

const router = Router();

router.put("/mi_perfil", authMiddleWare, updateProfile);

export default router;
