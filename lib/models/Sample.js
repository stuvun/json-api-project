const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    sku: Number,
    name: String,
    salePrice: Number
});

const sampleSchema = new Schema ({
    from: Number,
    to: Number,
    total: Number,
    currentPage: Number,
    totalPages: Number,
    queryTime: String,
    totalTime: String,
    partial: Boolean,
    canonicalUrl: String,
    products: [productSchema]
});

const Sample = mongoose.model('Sample', sampleSchema);
module.exports = Sample;