const express = require("express");
const ProductModel = require('./models/product-model');
const router = express.Router();


router.get("/Prodt", async function (req, res) {

    let result = await ProductModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);    
    }
});


router.get("/Prodt/:id", async function(req, res)
{
    var pid =  req.params.id;   	    
    let result  =  await ProductModel.findOne({ productId: pid }, {"_id":0});         
    console.log("[Read Single] - " + JSON.stringify(result));
    res.send(result);     
});


router.post('/Prodt',  async  function (req,res)
{ 
        var prodObj  = new  ProductModel({ 
            productname :  req.body.productname,
            price  :parseInt( req.body.price),
            quantity: req.body.quantity ,
            productId :parseInt(req.body.productId)  });

        let  newObj  =  await  prodObj.save(); 
		
		var result = {};
		result.status  = "Record inserted in Database";
		console.log("[Create] - Record inserted in Database");
		res.send(result);           
});



router.put('/Prodt',  async function (req,res)
{ 
        var prodObj  = {};
        prodObj.productname =  req.body.productname;
        prodObj.price =  req.body.price; 
        prodObj.quantity =  req.body.quantity; 
        prodObj.productId =  req.body.productId;

        let resResult  = await  ProductModel.findOneAndUpdate(  {productId:prodObj.productId},   {  $set : prodObj});
 
		var result = {};
		result.status  = "Record updated in Database";
		console.log("[Update] - Record updated in Database");
		res.send(result);	
});



router.delete("/Prodt/:id",async function (req,res)
{  
    var pId =  req.params.id;   
    let resResult  =  await  ProductModel.findOneAndDelete({ productId: pId}); 

	var result = {};
	result.status  = "Record deleted from Database";
	console.log("[Delete] - Record deleted from Database");
	res.send(result);
       
});

module.exports = router;
