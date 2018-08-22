const express = require("express");
const PostsRouter = express.Router();
const PostModel = require("./../../models/Post");

// GET: gets all posts
PostsRouter.get("/", function(req, res) {
  PostModel.find({})
    .then(posts => res.send(posts))
    .catch(() => {
      res.status(500).send({
        message: "Internal Server Error"
      });
    });
});

// GET: gets a specific post
PostsRouter.get("/:id", function(req, res) {
  const id = req.params.id;
  PostModel.find({ _id: id })
    .then(post => res.send(post))
    .catch(() => {
      res.status(404).send({
        message: "No Post Found"
      });
    });
});

// POST - Add a post to database.
PostsRouter.post("/", function(req, res) {
  const title = req.body.title;
  const body = req.body.body;
  const tags = req.body.tags;

  // if title or body is empty
  if (!title || !body)
    return res.status(400).send({
      message: "Title and Body is required"
    });

  // create a object to save to db.
  const newEntry = new PostModel({
    title,
    body,
    tags
  });

  newEntry
    .save()
    .then(post => {
      res.send(post);
    })
    .catch(err => {
      res.send(500).send({
        message: "Internal Server Error"
      });
    });
});

PostsRouter.post("/delete", function(req, res) {
  let id = req.body.id;
  // delete a post
});

module.exports = PostsRouter;
