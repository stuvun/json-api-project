const express = require("express");
const router = express.Router();
const mealController = require("../controllers/mealController");

const meal = mealController;

router.get("/meals", meal.meals);
router.get("/id", meal.id);
router.get("/meals/:name", meal.name);
router.get("/:category", meal.category);
router.post("/meals", meal.create);
router.put("/meals/:name", meal.edit);
router.delete("/meals/:name", meal.delete);

module.exports = router;