// Dependencies
// ===========================================================
var express = require("express");
//var bodyPraser = require("body-praser");

//port & instantiate
var app = express();
var PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Require Routes 
require("./app/routing/htmlRoutes")(app);
require("./APP/routing/apiRoutes")(app);

// Starts server "listening"
// =========================================================
app.listen(PORT, function() {
    console.log("app listening on PORT" + PORT);
});
