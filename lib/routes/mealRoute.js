const express = require("express");
const router = express.Router();
const mealController = require("../controllers/mealController");

// Full CRUD routers

// Lists all meals in the database
router.get("/meals", mealController.meals);
// Looks for a meal by their ID
router.get("/meals/:id", mealController.id);
// Looks for a meal by their name
router.get("/meals/:name", mealController.name);
// Looks for meals by their category
router.get("/:category", mealController.category);
// Creates the list of meals
router.post("/meals", mealController.create);
// Edits a meal that matches the id parameter
router.put("/meals/:id");
// Edits a meal that matches the name parameter
router.put("/meals/:name", mealController.edit);
// Deletes a meal that matches the id parameter
router.delete("/meals/:id", mealController.delete);
// Deletes a meal that matches the name paramater
router.delete("/meals/:name", mealController.delete);

module.exports = router;