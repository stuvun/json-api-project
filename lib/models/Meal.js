const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const strings = {
    type: String,
    trim: true,
    required: true,
    minLength: 1
};

const stringsOpt = {
    type: String,
    trim: true,
}

const mealSchema = new Schema ({
    id: strings,
    name: strings,
    category: strings,
    area: strings,
    instructions: strings,
    image: strings,
    tags: strings,
    video: strings,
    ingredients: Array,
    measurements: Array,
    source: strings,
    dateModified: stringsOpt
    }
);

const Meal = mongoose.model("Meal", mealSchema);
module.exports = Meal;