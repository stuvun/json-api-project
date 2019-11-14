const mongoose = require('./connection');
const Schema = mongoose.Schema;

const strings = {
    type: String,
    trim: true,
    required: true,
    minLength: 1
};

const mealsSchema = new Schema ({
    mealName: strings,
    image: strings,
    id: strings
})

const Meals = mongoose.model('Meals', mealsSchema);
module.exports = Meals;