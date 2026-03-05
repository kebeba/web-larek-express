import { celebrate, Segments } from 'celebrate';

import { productSchema } from '../schemas/product';
import { orderSchema } from '../schemas/order';

export const validateProductRequest = celebrate({ [Segments.BODY]: productSchema });
export const validateOrderRequest = celebrate({ [Segments.BODY]: orderSchema });
