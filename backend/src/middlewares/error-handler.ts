import { Request, Response, NextFunction } from 'express';

import BaseAppError from '../exceptions/base-app-exception';

const errorHandler = (
  error: BaseAppError,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(error.statusCode).json({ message: error.message });
};

export default errorHandler;
