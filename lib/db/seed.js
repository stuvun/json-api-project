const Meal = require("../models/Meal");
const mealsData = require("./meals.json");

// Replaces old seeded data with new data from meals.json
Meal.remove({}).then(res => {
  Meal.collection.insert(mealsData)
    .then(meals => {
      console.log(meals)
    })
    .catch(err => {
      console.log(err)
    });
});