const express = require("express");
const app = express();
const cors = require("cors");
const parser = require("body-parser");

app.use(cors());
app.use(parser.json());

app.use(require("./routes/index.js"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});