const Meals = require('../models/Meals');
const mealsData = require('./meals.json');
// const beef = require('./beef.json');
// const breakfast = require('./breakfast.json');
// const chicken = require('./chicken.json');
// const dessert = require('./dessert.json');
// const goat = require('./goat.json');
// const lamb = require('./lamb.json');
// const miscellaneous = require('./miscellaneous.json');
// const pasta = require('./pasta.json');
// const pork = require('./pork.json');
// const seafood = require('./seafood.json');
// const side = require('./side.json');
// const starter = require('./starter.json');
// const vegan = require('./vegan.json');

Meals.remove({}).then(res => {
    Meals.collection.insert(mealsData)
      .then(meals => {
        console.log(meals)
      })
      .catch(err => {
        console.log(err)
      });         
  });