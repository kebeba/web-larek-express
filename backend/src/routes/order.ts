import { Router } from 'express';

import makeOrder from '../controllers/order';
import { validateOrderRequest } from '../middlewares/request-validator';

const router = Router();

router.post('/', validateOrderRequest, makeOrder);

export default router;
