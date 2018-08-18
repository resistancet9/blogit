const express = require("express");
const http = require("http");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Listening on 3000");
});
// Body parser setup
