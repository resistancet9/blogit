const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4321;
const mongoose = require("mongoose");
const passport = require("passport");

// get config file
const config = require("./config/config");

// connection to mLab
mongoose
  .connect(
    config.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => console.log(err));

// passport setup
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// routes
const posts = require("./routes/posts/posts");
const users = require("./routes/users/users");

// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// posts related routes
app.use("/posts", posts);
app.use("/users", users);

// any unmatched routes
app.use(function(req, res) {
  res.status(404).send({
    message: "Not Found"
  });
});

// listen app on port specified
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
