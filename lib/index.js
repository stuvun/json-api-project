const express = require('express');
const app = express();
const cors = require("cors");
const parser = require('body-parser');
const Meal = require('./db/models/Meal');
const Category = require('./db/models/Category');

app.use(cors());

app.use(parser.json());

app.get('/', (req, res) => {
    Meal.find({}).then(meals => {
        res.json(meals)
    });
});

app.get('/meals', (req, res) => {
    Meal.find({}).then(meals => {
        res.json(meals)
    });
});

app.get('/categories', (req, res) => {
    Category.find({}).then(categories => {
        res.json(categories)
    });
});

app.get("/meals/:ids", (req, res) => {
    Meal.find({ id: req.params.ids }).then(meals => {
        res.json(meals)
    });
});

app.post("/meals", (req, res) => {
    Meal.create(req.body).then(meals => {
        res.json(meals)
    });
});

app.put("/meals/:ids", (req, res) => {
    Meal.findOneAndUpdate(req.body).then(meals => {
        res.json(meals)
    });
});

app.delete("/meals/:ids", (req, res) => {
    Meal.findOneAndDelete({ id: req.params.ids }).then(meals => {
        res.json(meals)
    });
});

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});