const express = require("express");
const PostsRouter = express.Router();

PostsRouter.get("/", function(req, res) {
  res.send({
    path: "/posts"
  });
});

module.exports = PostsRouter;
