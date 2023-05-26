const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  tittle: {
    type: String,
    required: true,
  },

  icon: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  
  img: {
    type: Array,
    required: true,
  },

  spotlight: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  offer: {
    type: Boolean,
    default: false
  }
});

module.exports = model("product", productSchema);