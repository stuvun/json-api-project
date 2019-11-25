const models = require("express").Router();
const all = require("./all");

models.get("/", all);

module.exports = models;