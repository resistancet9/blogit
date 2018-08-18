const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4321;

// routes
const posts = require("./routes/posts/posts");

// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// posts related routes
app.use("/posts", posts);

app.use(function(req, res) {
  res.status(404).send({
    message: "Not Found"
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
