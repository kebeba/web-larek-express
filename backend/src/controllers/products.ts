import { NextFunction, Request, Response } from 'express';

import Product from '../models/product';

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
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
