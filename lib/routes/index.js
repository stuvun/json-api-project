const express = require("express");
const router = express.Router();

router.use(require("./mealRoute"));

router.get("/", (req, res) => {
    res.status(200).json({ message: "Connected!" });
});

module.exports = router;