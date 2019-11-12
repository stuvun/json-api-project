const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    sku: Number,
    name: String,
    salePrice: Number
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;