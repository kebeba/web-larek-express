import { Joi } from 'celebrate';

import { IProduct, IProductImage } from '../models/product';

export const imageSchema = Joi.object<IProductImage>({
  fileName: Joi.string().required(),
  originalName: Joi.string().required(),
});

export const productSchema = Joi.object<IProduct>({
  title: Joi.string().min(2).max(30).required(),
  image: imageSchema.required(),
  category: Joi.string().required(),
  description: Joi.string().optional(),
  price: Joi.number().allow(null).optional(),
});
