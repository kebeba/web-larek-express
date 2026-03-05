import BaseAppError from './base-app-exception';

class IntegrityConflictError extends BaseAppError {
  constructor(message: string) {
    super(message, 409);
  }
}

export default IntegrityConflictError;
