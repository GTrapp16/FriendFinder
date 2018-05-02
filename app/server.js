// require necessary npm packages

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// tell node an express server is being created

var app = express();

//set up a port to use in listener later

var PORT = process.env.PORT || 8080;

//set up data parse handling

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//point the server to a series of routes

require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

//start the server to listen to our port

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});