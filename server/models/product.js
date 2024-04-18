const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    images: [String],
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true 
    },
    location: { type: mongoose.Schema.Types.ObjectId,
      ref: 'Location',
      required: true 
    },
    category: {  type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      // required: true 
    },
    tags: [String],
    price: { type: Number, required: true},
    quantity: { type: Number, required: true},
    availability: { type: Boolean, default: true}
  });
   ProductSchema.set('timestamps',true);
  
  const Product = mongoose.model('Product', ProductSchema);
  
  module.exports = Product;