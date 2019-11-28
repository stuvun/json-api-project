const Meal = require("../models/Meal");

module.exports = {
    meals: (req, res) => {
        Meal.find({}).then(meal => {
            res.json(meal);
        });
    },
    category: (req, res) => {
        Meal.find({ category : { $regex: req.params.category, $options: "i" } }).then(meal => {
            res.json(meal);
        });
    },
    categorySearch: (req, res) => {
        Meal.find({ category: new RegExp("^" + category + "$", "i") }).then(meal => {
            res.json(meal)
        })
    },
    id: (req, res) => {
        Meal.find({ id: req.params.id }).then(meal => {
            res.json(meal);
        });
    },
    name: (req, res) => {
        Meal.find({ name : { $regex : req.params.name, $options: 'i' } }).then(meal => {
            res.json(meal);
        });
    },
    nameSearch: (req, res) => {
        Meal.find({ name: new RegExp("^" + name + "$", "i") }).then(meal => {
            res.json(meal)
        })
    },
    create: (req, res) => {
        Meal.create(req.body).then(meal => {
            res.json(meal);
        });
    },
    editId: (req, res) => {
        Meal.findOneAndUpdate({ id: req.params.id }, req.body, {
            new: true
        }).then(meal => {
            res.json(meal);
        });
    },
    editName: (req, res) => {
        Meal.findOneAndUpdate({ name : { $regex : req.params.name, $options: 'i' } }, req.body, {
            new: true
        }).then(meal => {
            res.json(meal);
        });
    },
    deleteId: (req, res) => {
        Meal.findOneAndDelete({ id: req.params.id }, req.body, {
            new: true
        }).then(meal => {
            res.json(meal);
        });
    },
    deleteName: (req, res) => {
        Meal.findOneAndDelete({ name: req.params.name }, req.body, {
            new: true
        }).then(meal => {
            res.json(meal);
        });
    }
};