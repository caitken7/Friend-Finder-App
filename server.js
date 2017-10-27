var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// var friends = require("./app/data/friends.js")

// Create an instance of the express app.
var app = express();

// Specify the port.
var PORT = 3000;

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Require Routes
var apiRoutes = require("./app/routing/apiRoutes.js")(app)
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app)

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});