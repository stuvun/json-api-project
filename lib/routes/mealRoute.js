const express = require("express");
const router = express.Router();
const mealController = require("../controllers/mealController");

// Full CRUD routers

// Lists all meals in the database
router.get("/meals", mealController.meals);
// Looks for a meal by their ID
router.get("/meals/:id", mealController.id);
// Creates the list of meals
router.post("/meals", mealController.create);
// Edits a meal that matches the id parameter
router.put("/meals/:id", mealController.edit);
// Deletes a meal that matches the id parameter
router.delete("/meals/:id", mealController.delete);

module.exports = router;