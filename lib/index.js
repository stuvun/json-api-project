const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const parser = require("body-parser");

app.use(cors());
app.use("/", routes);
app.use(parser.json());

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});