import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    url: { type: String, required: true },
    author: { type: String, required: true },
    rating: { type: Number, required: true },
    numOfReview: { type: Number, required: true },
    description: { type: String, required: true },
    countAvailable: { type: Number, required: true },
    category: { type: String, required: true },
    originalPrice: { type: Number, required: true },
  },
  {
    timestamps: true
  }
)

const Product = mongoose.model('Product', productSchema);

export default Product;