const Meal = require("../models/Meal");

module.exports = {
    meals: (req, res) => {
        Meal.find({}).then(meals => {
            res.json(meals);
        });
    },
    id: (req, res) => {
        Meal.find({ id: req.params.id }).then(meals => {
            res.json(meals);
        });
    },
    name: (req, res) => {
        Meal.find({ name: req.params.name }).then(meals => {
            res.json(meals);
        });
    },
    category: (req, res) => {
        Meal.find({ category: req.params.category }).then(meals => {
            res.json(meals);
        });
    }
};