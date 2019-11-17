const Meal = require('./Meal');
const Category = require('./Category');
const mealsData = require('../meals.json');
const categoriesData = require('../categories.json');
const axios = require('axios').default;

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

// Meal.remove({}).then(res => {
//   mealsData.forEach(meal => {
//     let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + meal.id
//     console.log(url)
//     axios.get(url)
//       .then(res => {
//         Meal.collection.insert(res.data)
//         .then(meals => {
//           console.log(meals)
//         })
//         .catch(err => {
//           console.log(err)
//         })
//       })
//       .catch(err => {
//         console.log(err)
//       })
//     })
// })
// .catch(err => {
//   console.log(err)
// });

Meal.remove({}).then(res => {
  Meal.collection.insert(mealsData)
    .then(meals => {
      console.log(meals)
    })
    .catch(err => {
      console.log(err)
    });
});

Category.remove({}).then(res => {
  Category.collection.insert(categoriesData)
    .then(categories => {
      console.log(categories)
    })
    .catch(err => {
      console.log(err)
    });
});