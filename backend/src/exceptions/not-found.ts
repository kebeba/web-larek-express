import BaseAppError from './base-app-exception';

class NotFoundError extends BaseAppError {
  constructor(message: string) {
    super(message, 404);
  }
}

export default NotFoundError;
