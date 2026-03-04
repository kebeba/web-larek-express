import { Router } from 'express';

import makeOrder from '../controllers/order';

const router = Router();

router.post('/', makeOrder);

export default router;
