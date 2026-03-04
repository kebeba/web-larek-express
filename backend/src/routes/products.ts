import { Router } from 'express';

import { createProduct, getProducts } from '../controllers/products';
import { validateProductRequest } from '../middlewares/request-validator';

const productRouter = Router();

productRouter.post('/', validateProductRequest, createProduct);
productRouter.get('/', getProducts);

export default productRouter;
