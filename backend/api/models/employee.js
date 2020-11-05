const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
  
    name:{
        type:String
    },
    mobile:{
        type:String
    },

    email:{
        type:String
    },
    city:{
        type:String
    },

});

mongoose.model('Employee',employeeSchema);