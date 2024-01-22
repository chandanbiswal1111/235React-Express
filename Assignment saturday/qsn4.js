var express = require('express');
var app = express();
app.get('/',function(req,res){
    let str = "<h3 align='center'>Employee Details</h3>";   
    str +=   "<hr/>";
    str +=   "<div>";
    str +=   "Employee Id : 10256 <br/>";
    str +=   "Employee Name : Narasimha Rao <br/>";
    str +=   "Employee Job : Manager <br/>";
    str +=   "Employee Deptno : 10 <br/>";
    str +=   "Employee E-mailId  :  tnrao.trainer@gmail.com <br/>";
    str +=   "</div>";
    res.send(str);
});
var server = app.listen(3004,function(){
    console.log("Express server Application server is started at url: http://localhost:3004"); 
});