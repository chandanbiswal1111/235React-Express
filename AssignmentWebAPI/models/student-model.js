var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testDb');

var Schema = mongoose.Schema;

var StudentModelSchema = new Schema(
    {   
        rollNo: Number,
        name: String,
        email: String,
        username: String,
        password: String

    }, 
    { versionKey: false  } );

var StudentModel = mongoose.model('studs', StudentModelSchema );

// Exporting StddentsModel 
module.exports = StudentModel;




