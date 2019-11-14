const express = require('express');
const app = express();
const parser = require('body-parser');
const Meal = require('./models/Meal');
const Category = require('./models/Category');

app.use(parser.json());

app.get('/', (req, res) => {
    Meal.find({}).then(meals => {
        res.json("Home");
    });
});

app.get('/meals', (req, res) => {
    Meal.find({}).then(meals => {
        res.json(meals);
    });
});

app.get('/categories', (req, res) => {
    Category.find({}).then(categories => {
        res.json(categories);
    });
});

app.get("/meals/:ids", (req, res) => {
    Meal.find({ id: req.params.ids }).then(meals => {
        res.json(meals);
    });
});

app.post("/meals", (req, res) => {
    Meal.create(req.body).then(meals => {
        res.json(meals);
    })
})

app.put("/meals", (req, res) => {
    Meal.update(req.body).then(meals => {
        res.json(meals);
    })
})

app.listen(3000, () =>
    console.log('listening on port 3000')
);