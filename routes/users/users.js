const express = require("express");
const UsersRouter = express.Router();
const bcrypt = require("bcryptjs");
const UserModel = require("./../../models/User");

// /users root

// register user
UsersRouter.post("/register", function(req, res) {
  if (!req.body.email || !req.body.name || !req.body.password)
    return res.status(400).send({
      message: "Name, Email or Password Missing"
    });

  UserModel.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).send({
        message: "User with this email exists"
      });
    } else {
      const newUser = new UserModel({
        email: req.body.email,
        name: req.body.name
      });

      bcrypt.hash(req.body.password, 8, function(err, hash) {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => {
            throw err;
          });
      });
    }
  });
});

// user login
UsersRouter.post("/login", function(req, res) {
  if (!req.body.email || !req.body.password)
    return res.status(400).send({
      message: "Email or Password Missing"
    });

  UserModel.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      return res.status(404).send({
        message: "Bad Email or Password"
      });
    }

    bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
      if (!isMatch || err)
        return res.status(404).send({
          message: "Bad Email or Password"
        });

      return res.json({
        message: "You are damn near free!"
      });
    });
  });
});

module.exports = UsersRouter;
