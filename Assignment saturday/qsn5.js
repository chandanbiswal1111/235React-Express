var express = require("express");

var app =  express();   

app.get("/", function(req, res){

    let empId = "12056";
	let empName = "Narasimha Rao";
    let empJob="Manager";
    let empDeptno="10";
	let empEmail = "tnrao.trainer@gmail.com";

    let str = "<h3 align='center'>Employee Details</h3>";   
    str +=   "<hr/>";

    str +=   `<div>
                Employee Id :  ${empId}  <br/>
                Employee Name :  ${empName}  <br/>
                Employee Job :  ${empJob}  <br/>
                Employee Deptno: ${empDeptno}<br/>
                Employee EmailId: ${empEmail}<br/>
             </div>`  ;

    res.send(str);
});

var server = app.listen(3004, function(){});
console.log("Express Server Application is started at the URL: http://localhost:3004");