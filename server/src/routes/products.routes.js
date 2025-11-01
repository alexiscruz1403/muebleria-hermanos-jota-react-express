import { Router } from 'express';
import { getProducts, getDestacados, getProductById, createProduct, updateProduct, createProductImage, deleteProduct } from '../controllers/products.controller.js';
import { upload } from "../../config/multerConfig.js";

const router = Router();

router.get('/', getProducts);
router.get("/destacados", getDestacados);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.post('/:id/image', upload.single('image'), createProductImage);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
