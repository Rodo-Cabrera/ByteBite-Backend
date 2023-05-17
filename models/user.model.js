const { Schema, model } = require('mongoose');


const userSchema = new Schema({

  name: {
    type: String,
    require: true
  },

  lastName: {
    type: String,
    require: true
  },

  age: {
    type: Number,
    require: true
  },

  email: {
    type: String,
    require: true
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

