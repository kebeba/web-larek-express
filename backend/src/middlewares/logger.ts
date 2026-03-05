import path from 'path';
import expressWinston from 'express-winston';
import winston from 'winston';

export const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({
      filename: path.join(process.cwd(), 'logs', 'request.log'),
    }),
  ],
  format: winston.format.json(),
});

export const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({
      filename: path.join(process.cwd(), 'logs', 'error.log'),
    }),
  ],
  format: winston.format.json(),
});
