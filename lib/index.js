const express = require("express");
const app = express();
const cors = require("cors");
const parser = require("body-parser");

app.use(require("./routes/index"));
app.use(cors());
app.use(parser.json());

app.set("port", process.env.PORT || 9090);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});