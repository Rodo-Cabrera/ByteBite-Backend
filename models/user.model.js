const { Schema, model } = require('mongoose');


const userSchema = new Schema({

  name: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  disabled: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: 'client'
  }
});

module.exports = model('user', userSchema)

