import BaseAppError from './base-app-exception';

class BadRequestError extends BaseAppError {
  constructor(message: string) {
    super(message, 400);
  }
}

export default BadRequestError;
