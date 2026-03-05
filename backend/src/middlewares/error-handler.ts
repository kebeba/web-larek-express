import { Request, Response, NextFunction } from 'express';

import BaseAppError from '../exceptions/base-app-exception';

const errorHandler = (
  error: BaseAppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => res.status(error.statusCode).json({ message: error.message });

export default errorHandler;
