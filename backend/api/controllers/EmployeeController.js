'use strict';

var mongoose = require('mongoose'),
Employee = mongoose.model('Employee');


module.exports = {
    addEmployee: addEmployee,
};

function addEmployee(req, res) {

    if (!req.body.name && !req.body.mobile && !req.body.email && !req.body.city )
     {
        // return res.json(Response(402, "failed", "Please fill all the required fields."));
        return res.json({
            'code': 200,
            'status': 'error',
            "message": 'Failed.',
            'data' : req.body
        });
     }
     else 
     {
        var employeeData = {
            "name": req.body.name,
            "mobile": req.body.mobile,
            "email": req.body.email,
            "city": req.body.city
        };
        Employee.insertMany(employeeData,function(err,res){
            if(err)
            throw err;
            else
            console.log("Saved");
        });
        return res.json({
            'code': 200,
            'status': 'success',
            "message": 'Student list get Successfully.',
        });
     }
  
    
}