import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routes/products'


const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/weblarek');

app.use('/product', productRouter);

app.listen(PORT, () => {
  console.log(`Express started on port ${PORT}`);
})
