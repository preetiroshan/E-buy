import mongoose from 'mongoose';
import { productSchema } from './productModel';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    cartItems: { type: [productSchema, { countInCart: Number }], required: false },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)
export default User;