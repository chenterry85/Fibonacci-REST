const mongoose = require('mongoose');

const FibNumSchema = mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  fib_value: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FibNums', FibNumSchema);