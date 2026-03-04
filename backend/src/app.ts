import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

import orderRouter from './routes/order'
import productRouter from './routes/products'


const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017/weblarek');

app.use('/product', productRouter);
app.use('/order', orderRouter);

app.listen(PORT, () => {
  console.log(`Express started on port ${PORT}`);
})
