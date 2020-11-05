//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/EmployeeDB';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true} , (err) => {
    if(!err){
        console.log("Connected Successfully!");
    }
    else{
        console.log("Error connecting while database" + err);
    }
});

require('./employee');