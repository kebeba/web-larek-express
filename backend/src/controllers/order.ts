import { faker } from '@faker-js/faker';
import { NextFunction, Request, Response } from 'express';

import productModel from '../models/product';
import { IOrderData } from '../schemas/order';

const makeOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order: IOrderData = req.body;
    await productModel.find({
      _id: { $in: order.items },
      price: { $exists: true, $ne: null },
    });

    return res.status(200).send({ id: faker.string.uuid(), total: order.total });
  } catch (error) {
    return next(error);
  }
};

export default makeOrder;
