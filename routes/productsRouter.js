import { Router } from 'express';
const productRouter = Router();
import { getAllProducts } from '../products/controller/products_controller.js';

// Rutas de usuario
productRouter.get('/', getAllProducts);



export default productRouter