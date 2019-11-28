const express = require("express");
const router = express.Router();
const mealController = require("../controllers/mealController");

// Full CRUD routers

// Lists all meals in the database
router.get("/meals", mealController.meals);
// Looks for meals by their category
router.get("/category/:category", mealController.category);
// Looks for a meal by their ID
router.get("/id/:id", mealController.id);
// Looks for a meal by their name
router.get("/name/:name", mealController.name);
// Creates a new meal
router.post("/", mealController.create);
// Edits a meal that matches the id parameter
router.put("/id/:id", mealController.editId);
// Edits a meal that matches the name parameter
router.put("/name/:name", mealController.editName)
// Deletes a meal that matches the id parameter
router.delete("/id/:id", mealController.deleteId);
// Deletes a meal that matches the name parameter
router.delete("/name/:name", mealController.deleteName);

module.exports = router;