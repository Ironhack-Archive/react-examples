const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, 'The phone brand is required']
  },
  name: {
    type: String,
    required: [true, 'The phone name is required']
  },
  origin: {
    type: String,
    default: ''
  },
  specs: {
    type: Array,
    default: []
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String, default: ''
  }
});

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee;