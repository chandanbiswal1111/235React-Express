const express = require("express");
const bodyParser = require("body-parser");  
const productRouter = require('./product-routes');

// Creates an express application
var app = express();  

app.use(bodyParser.urlencoded({extended : false})); 
app.use("/prdts", productRouter);
 
// Confgiure the middleware
app.set("view engine", "ejs");

app.get("/", function (req, res) {   
    res.render("home", {});
});


var server = app.listen(3005, function () { });
console.log("Express Server Application is started. Browser at the URL: http://localhost:3005/");