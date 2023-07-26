const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  firstName: {
    type: String, 
  },
  lastName: { 
    type: String, 
  }, 
  address: {
    type: String, 
  }, 
  total: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
