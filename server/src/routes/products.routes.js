import { Router } from 'express';
import {
  getProducts,
  getDestacados,
  getProductById,
} from "../controllers/products.controller.js";

const router = Router();

router.get('/', getProducts);
router.get("/destacados", getDestacados);
router.get('/:id', getProductById);

export default router;
