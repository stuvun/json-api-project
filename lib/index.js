const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const parser = require("body-parser");
const Meal = require("./models/Meal");

app.use("/", routes);
app.use(cors());
app.use(parser.json());

app.get("/", (req, res, next) => {
    Meal.find({}).then(meals => {
        res.json(meals)
    });
});

app.get("/meals", (req, res) => {
    Meal.find({}).then(meals => {
        res.json(meals)
    });
});

app.get("/categories", (req, res) => {
    Category.find({}).then(categories => {
        res.json(categories)
    });
});

app.get("/meals/:name", (req, res) => {
    Meal.find({ name: req.params.name }).then(meals => {
        res.json(meals)
    });
});

app.post("/meals", (req, res) => {
    Meal.create(req.body).then(meals => {
        res.json(meals)
    });
});

app.put("/meals/:name", (req, res) => {
    Meal.findOneAndUpdate(req.body).then(meals => {
        res.json(meals)
    });
});

app.delete("/meals/:name", (req, res) => {
    Meal.findOneAndDelete({ name: req.params.name }).then(meals => {
        res.json(meals)
    });
});

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});