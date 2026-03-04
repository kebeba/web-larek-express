import { Request, Response, NextFunction } from 'express';
import { Error as MongooseError } from 'mongoose';

import BaseAppError from '../exceptions/base-app-exception';
import BadRequestError from '../exceptions/bad-request';

const errorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof MongooseError.ValidationError) {
    return next(new BadRequestError(error.message));
  }

  if (error instanceof BaseAppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
};

export default errorHandler;
