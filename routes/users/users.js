const express = require("express");
const UsersRouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("./../../config/config");
const UserModel = require("./../../models/User");
const passport = require("passport");

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
      if (!isMatch || err) {
        return res.status(404).send({
          message: "Bad Email or Password"
        });
      }

      // payload for jwt
      const payload = {
        id: user.id,
        name: user.name
      };

      // generate jwt token
      jwt.sign(payload, config.key, { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;

        return res.json({
          success: true,
          token: "Bearer " + token
        });
      });
    });
  });
});

UsersRouter.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    res.json(req.user);
  }
);

module.exports = UsersRouter;
