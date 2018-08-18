const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 4321;
// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
