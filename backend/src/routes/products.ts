import { Router } from 'express';

import { createProduct, getProducts } from '../controllers/products';

const productRouter = Router();

productRouter.post('/', createProduct);
productRouter.get('/', getProducts);

export default productRouter;
