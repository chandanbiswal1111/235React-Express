var express = require("express");

var app =  express();   
app.use(express.static('public')); 

app.get("/", function(req, res){
   
    res.sendFile(__dirname + "/assignment/home.html");    
});

app.get("/login", function(req, res){  
     res.sendFile(__dirname + "/assignment/login.html");    
 });

var server = app.listen(3005, function(){});
console.log("Express Server Application is started. Browser at the URL: http://localhost:3005/");