const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: Array
  },
  comments: {
    type: Array
  }
});

module.exports = mongoose.model("post", postSchema);
