const Meal = require("../models/Meal");

module.exports = {
    meals: (req, res) => {
        Meal.find({}).then(meal => {
            res.json(meal);
        });
    },
    id: (req, res) => {
        Meal.find({ id: req.params.id }).then(meal => {
            res.json(meal);
        });
    },
    name: (req, res) => {
        Meal.find({ name: req.params.name }).then(meal => {
            res.json(meal);
        });
    },
    category: (req, res) => {
        Meal.find({ category: req.params.category }).then(meal => {
            res.json(meal);
        });
    },
    create: (req, res) => {
        Meal.create(req.body).then(meal => {
            res.json(meal);
        });
    },
    edit: (req, res) => {
        Meal.findOneAndUpdate({ name: req.params.name }, req.body, {
            new: true
        }).then(meal => {
            res.json(meal);
        });
    },
    edit: (req, res) => {
        Meal.findOneAndUpdate({ id: req.params.id }, req.body, {
            new: true
        }).then(meal => {
            res.json(meal);
        });
    },
    delete: (req, res) => {
        Meal.findOneAndDelete({ name: req.params.name }, req.body, {
            new: true
        }).then(meal => {
            res.json(meal);
        });
    },
    delete: (req, res) => {
        Meal.findOneAndDelete({ id: req.params.id }, req.body, {
            new: true
        }).then(meal => {
            res.json(meal);
        });
    }
};