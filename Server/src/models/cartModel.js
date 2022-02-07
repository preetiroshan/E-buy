import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },

}, {
    timestamps: true
})

const Product = mongoose.model('Product', cartSchema);

export default Product;