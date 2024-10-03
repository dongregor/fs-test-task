const mongoose = require('mongoose');

const installmentSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  period: {
    type: Number,
    required: true,
  },
}, { _id: false });

const priceSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  installment: {
    type: installmentSchema,
    required: true,
  },
  validFrom: {
    type: Date,
    required: true,
  },
  validTo: {
    type: Date,
    required: true,
  },
}, { _id: false });

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  dimensions: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  energyClass: {
    type: String,
    required: true,
  },
  price: {
    type: priceSchema,
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);