const express = require("express");
const router = express.Router();

router.get("/AllProducts", function (req, res) {

    let dataObj = {};    
    dataObj.productsArray = [
        { pid: 1, pname: "Product1", price:10, quantity:50, catagory:"Catagory1"},
        { pid: 2, pname: "Product2", price:20, quantity:40, catagory:"Catagory2"},
        
    ];

    res.render("products", dataObj);
});

router.get("/GetProductById/:id", function (req, res) {



   var productsArray = [
    { pid: 1, pname: "Product1", price:10, quantity:50, catagory:"Catagory1"},
    { pid: 2, pname: "Product2", price:20, quantity:40, catagory:"Catagory2"},
    ];

    let pno = req.params.id;
    let dataObj = {};    
    dataObj.productObj = productsArray.find( item => item.pid == pno );

    res.render("productdetails", dataObj);
});

module.exports = router;