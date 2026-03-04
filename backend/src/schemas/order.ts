import { Joi } from 'celebrate';

enum PayMethod {
  Card = 'card',
  Online = 'online',
}

export interface IOrderData {
  items: string[];
  total: number;
  payment: PayMethod;
  email: string;
  phone: string;
  address: string;
}

export const orderSchema = Joi.object<IOrderData>({
  items: Joi.array().items(Joi.string().required()).min(1).required(),
  total: Joi.number().positive().required(),
  payment: Joi.string().valid(...Object.values(PayMethod)).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
});
