import { Router } from "express";
import * as productController from '../controller/products.controller'
const router = Router();

router.post('/', productController.createProduct);

router.get('/', productController.getProducts);

router.get('/:productId', productController.getProductById);

router.put('/:productId', productController.udateProductById);

router.delete('/:productId', productController.DeleteProducById);


export default router;  