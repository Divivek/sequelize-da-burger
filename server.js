//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//create the express instance
var app =express();
var port = process.env.PORT || 3000;

// requiring our model for syncing
var db  = require("./models");
//Serve static content for the app from the "public" directory in the app directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));

//Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//set handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give the server access to them.
 var routes = require("./controllers/burgers_controllers.js");
  app.use("/",routes);

db.sequelize.sync().then(function() {
app.listen (port);
	console.log("server started at : " + port)
});;
