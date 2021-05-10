const express = require("express");
const bodyParser = require("body-parser");

const router = require("./src/routes");

const app = express();
app.use(bodyParser.json());
app.use("/api", router);

app.listen(5000, () => {
  console.log("Listening to port 5000, App Ready !");
});
