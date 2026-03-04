import { faker } from '@faker-js/faker';
import { NextFunction, Request, Response } from 'express';

import BadRequestError from '../exceptions/bad-request';
import productModel from '../models/product';
import { IOrderData } from '../schemas/order';

const makeOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return next(new BadRequestError('В полученном запросе на создание заказа отсутствуют данные'));
    }
    const order: IOrderData = req.body;
    const foundProducts = await productModel.find({
      _id: { $in: order.items },
      price: { $exists: true, $ne: null },
    });
    if (order.items.length !== foundProducts.length) {
      return next(new BadRequestError('В составе заказа присутствуют невалидные товары'));
    }

    let calculatedTotal = 0;
    foundProducts.forEach((product) => {
      if (product.price) {
        calculatedTotal += product.price;
      } else {
        calculatedTotal += 0;
      }
    });
    if (order.total !== calculatedTotal) {
      return next(new BadRequestError('Указанная сумма заказа не совпадает с общей суммой товаров'));
    }

    return res.status(200).send({ id: faker.string.uuid(), total: order.total });
  } catch (error) {
    return next(error);
  }
};

export default makeOrder;
