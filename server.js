//require dependencies
var express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const models = require("./models");
const routes = require('./routes/api.js');
//set up express server
var app = express();
const PORT = process.env.PORT || 3001;

//configure parser for getting data from the front end
app.use()(bodyParser.urlencoded({ extended: true }));
app.use()(bodyParser.json());

//connects server to the 'static' front-end assets
app.use()(express.static("client/build"));

//connecting the back-end routes to the server
app.use()(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact");

  //set up the server to listen
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });