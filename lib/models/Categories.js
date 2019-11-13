const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const strings = {
    type: String,
    trim: true,
    required: true,
    minLength: 1
};

const categorySchema = new Schema ({
    idCategory: strings,
    strCategory: strings,
    strCategoryThumb: strings,
    strCategoryDescription: strings
})

const categoriesSchema = new Schema ({
    categories: [categorySchema]
});

const Categories = mongoose.model('Categories', categoriesSchema);
module.exports = Categories;