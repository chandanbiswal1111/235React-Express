var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/expressJs');

var Schema = mongoose.Schema;

var ProductModelSchema = new Schema(
    {   
        productId: Number,
        productname: String,
        price: Number,
        quantity: Number

    }, 
    { versionKey: false  } );

var ProductModel = mongoose.model('prods', ProductModelSchema );


module.exports = ProductModel;




