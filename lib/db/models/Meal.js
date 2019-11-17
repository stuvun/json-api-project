const mongoose = require('./connection');
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
    meals: [{
      idMeal: strings,
      strMeal: strings,
      strDrinkAlternate: String,
      strCategory: strings,
      strArea: strings,
      strInstructions: strings,
      strMealThumb: strings,
      strYoutube: strings,
      strIngredient1: stringsOpt,
      strIngredient2: stringsOpt,
      strIngredient3: stringsOpt,
      strIngredient4: stringsOpt,
      strIngredient5: stringsOpt,
      strIngredient6: stringsOpt,
      strIngredient7: stringsOpt,
      strIngredient8: stringsOpt,
      strIngredient9: stringsOpt,
      strIngredient10: stringsOpt,
      strIngredient11: stringsOpt,
      strIngredient12: stringsOpt,
      strIngredient13: stringsOpt,
      strIngredient14: stringsOpt,
      strIngredient15: stringsOpt,
      strIngredient16: stringsOpt,
      strIngredient17: stringsOpt,
      strIngredient18: stringsOpt,
      strIngredient19: stringsOpt,
      strIngredient20: stringsOpt,
      strMeasure1: stringsOpt,
      strMeasure2: stringsOpt,
      strMeasure3: stringsOpt,
      strMeasure4: stringsOpt,
      strMeasure5: stringsOpt,
      strMeasure6: stringsOpt,
      strMeasure7: stringsOpt,
      strMeasure8: stringsOpt,
      strMeasure9: stringsOpt,
      strMeasure10: stringsOpt,
      strMeasure11: stringsOpt,
      strMeasure12: stringsOpt,
      strMeasure13: stringsOpt,
      strMeasure14: stringsOpt,
      strMeasure15: stringsOpt,
      strMeasure16: stringsOpt,
      strMeasure17: stringsOpt,
      strMeasure18: stringsOpt,
      strMeasure19: stringsOpt,
      strMeasure20: stringsOpt,
      strSource: strings,
      dateModified: stringsOpt
    }]
});

const Meal = mongoose.model('Meals', mealSchema);
module.exports = Meal;