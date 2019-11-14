const mongoose = require('./connection');
const Schema = mongoose.Schema;

const strings = {
    type: String,
    trim: true,
    required: true,
    minLength: 1
};

const categorySchema = new Schema ({
    categories: {
        id: strings,
        category: strings,
        image: strings,
        description: strings
    }
})

const Category = mongoose.model('Categories', categorySchema);
module.exports = Category;