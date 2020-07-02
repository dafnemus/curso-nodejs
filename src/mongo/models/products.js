// defino el modelo de mis productos.
const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String, required: true }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true, // info de cuando  se creo el producto y cuando se modifico el mismo.
  },
);

const model = mongoose.model('product', productSchema);

module.exports = model;
