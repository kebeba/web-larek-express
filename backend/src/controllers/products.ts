import { NextFunction, Request, Response } from 'express';

import BadRequestError from '../exceptions/bad-request';
import IntegrityConflictError from '../exceptions/integrity-conflict';
import Product from '../models/product';

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return next(new BadRequestError('В полученном запросе на создание товара отсутствуют данные'));
    }
    const {
      title, image, category, description, price,
    } = req.body;
    const product = await Product.create({
      title,
      image,
      category,
      description,
      price,
    });
    return res.status(201).send({ data: product });
  } catch (error) {
    if (error instanceof Error && error.message.includes('E11000')) {
      return next(new IntegrityConflictError('Товар с таким названием уже существует'));
    }
    return next(error);
  }
};

export const getProducts = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await Product.find({});
    res.status(200).send({ items: products, total: products.length });
  } catch (error) {
    next(error);
  }
};
