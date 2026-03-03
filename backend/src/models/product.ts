import { model, Schema } from 'mongoose';

interface IProductImage {
  fileName: string,
  originalName: string,
}

interface IProduct {
  title: string,
  image: IProductImage,
  category: string,
  description?: string,
  price?: number | null,
}

const imageSchema = new Schema<IProductImage>(
  {
    fileName: {
      type: String,
      required: true,
    },
    originalName: {
      type: String,
      required: true,
    },
  },
);

const productSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
      unique: true,
    },
    image: imageSchema,
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
      default: null,
    },
  },
);

export default model<IProduct>('product', productSchema);
