import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

import NotFoundError from './exceptions/not-found'
import errorHandler from './middlewares/error-handler'
import orderRouter from './routes/order'
import productRouter from './routes/products'


const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(errorHandler);

mongoose.connect('mongodb://127.0.0.1:27017/weblarek');

app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('*', (_req, _res, next) => {
  next(new NotFoundError('Указанный адрес не существует'))
})

app.listen(PORT, () => {
  console.log(`Express started on port ${PORT}`);
})
