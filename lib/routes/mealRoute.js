const express = require("express");
const router = express.Router();
const mealController = require("../controllers/mealController");

const meal = mealController;

// Full CRUD routers

// Lists all meals in the database
router.get("/meals", meal.meals);
// Looks for a meal by their ID
router.get("/meals/:id", meal.id);
// Looks for a meal by their name
router.get("/meals/:name", meal.name);
// Looks for meals by their category
router.get("/:category", meal.category);
// Creates the list of meals
router.post("/meals", meal.create);
// Edits a meal that matches the id parameter
router.put("/meals/:id");
// Edits a meal that matches the name parameter
router.put("/meals/:name", meal.edit);
// Deletes a meal that matches the id parameter
router.delete("/meals/:id", meal.delete);
// Deletes a meal that matches the name paramater
router.delete("/meals/:name", meal.delete);

module.exports = router;