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
    meal: [{
      id: strings,
      mealName: strings,
      category: strings,
      area: strings,
      instructions: strings,
      image: strings,
      tags: strings,
      video: strings,
      ingredient1: stringsOpt,
      ingredient2: stringsOpt,
      ingredient3: stringsOpt,
      ingredient4: stringsOpt,
      ingredient5: stringsOpt,
      ingredient6: stringsOpt,
      ingredient7: stringsOpt,
      ingredient8: stringsOpt,
      ingredient9: stringsOpt,
      ingredient10: stringsOpt,
      ingredient11: stringsOpt,
      ingredient12: stringsOpt,
      ingredient13: stringsOpt,
      ingredient14: stringsOpt,
      ingredient15: stringsOpt,
      ingredient16: stringsOpt,
      ingredient17: stringsOpt,
      ingredient18: stringsOpt,
      ingredient19: stringsOpt,
      ingredient20: stringsOpt,
      measurement1: stringsOpt,
      measurement2: stringsOpt,
      measurement3: stringsOpt,
      measurement4: stringsOpt,
      measurement5: stringsOpt,
      measurement6: stringsOpt,
      measurement7: stringsOpt,
      measurement8: stringsOpt,
      measurement9: stringsOpt,
      measurement10: stringsOpt,
      measurement11: stringsOpt,
      measurement12: stringsOpt,
      measurement13: stringsOpt,
      measurement14: stringsOpt,
      measurement15: stringsOpt,
      measurement16: stringsOpt,
      measurement17: stringsOpt,
      measurement18: stringsOpt,
      measurement19: stringsOpt,
      measurement20: stringsOpt,
      source: strings,
      dateModified: stringsOpt
    }]
});

const Meal = mongoose.model('Meals', mealSchema);
module.exports = Meal;