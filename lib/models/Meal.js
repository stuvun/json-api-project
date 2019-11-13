const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const strings = {
    type: String,
    trim: true,
    required: true,
    minLength: 1
};

const detailsSchema = new Schema ({
    strMeal: strings,
    strMealThumb: strings,
    idMeal: strings
})

const mealsSchema = new Schema ({
    meals: [detailsSchema]
});

const Meals = mongoose.model('Meals', mealsSchema);
module.exports = Meals;