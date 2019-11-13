const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const strings = {
    type: String,
    trim: true,
    required: true,
    minLength: 1
};

const categorySchema = new Schema ({
    categories: {
        idCategory: strings,
        strCategory: strings,
        strCategoryThumb: strings,
        strCategoryDescription: strings
    }
})

const Category = mongoose.model('Categories', categorySchema);
module.exports = Category;