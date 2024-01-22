var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mphasis235');

var Schema = mongoose.Schema;

var StddentsModelSchema = new Schema(
    {   
        rollNo: Number,
        name: String,
        email: String,
        username: String,
        password: String

    }, 
    { versionKey: false  } );

var StddentsModel = mongoose.model('student', StddentsModelSchema );

// Exporting StddentsModel 
module.exports = StddentsModel;




