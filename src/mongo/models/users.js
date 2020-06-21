// modelo para mis usuarios.
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true }, // usuario unico.
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // email unico
  data: {
    age: Number,
    isMale: Boolean,
  },
  role: { type: String, enum: ['admin', 'seller'], default: 'seller' },
});

const model = mongoose.model('user', userSchema);

module.exports = model;
