const data = require("../../db/meals.json");

module.exports = (req, res) => {
    const modelName = req.params.name * 1;
    const model = data.models.find(m => m.name === modelName);

    res.status(200).json({ model });
};