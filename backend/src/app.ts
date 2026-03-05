import { errors } from 'celebrate';
import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

import NotFoundError from './exceptions/not-found';
import errorHandler from './middlewares/error-handler';
import { errorLogger, requestLogger } from './middlewares/logger';
import orderRouter from './routes/order';
import productRouter from './routes/products';

dotenv.config()
const { PORT = 3000, DB_ADDRESS = 'mongodb://127.0.0.1:27017/weblarek' } = process.env;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(requestLogger);

mongoose.connect(DB_ADDRESS);

app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('*', (_req, _res, next) => {
  next(new NotFoundError('Указанный адрес не существует'));
})

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Express started on port ${PORT}`);
})
