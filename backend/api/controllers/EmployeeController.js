'use strict';

var mongoose = require('mongoose'),
Employee = mongoose.model('Employee');


module.exports = {
    addEmployee: addEmployee,
    listEmployees:listEmployees,
};

function addEmployee(req, res) {
    

    if (!req.body.name && !req.body.mobile && !req.body.email && !req.body.city )
     {
        return res.json({'code': 200,'status': 'error',"message": 'Failed.','data' : req.body});
     }
     else 
     {
        var employeeData = {
            "name": req.body.name,
            "mobile": req.body.mobile,
            "email": req.body.email,
            "city": req.body.city
        };
        Employee.count({email : req.body.email}).then(count => {
         if(count > 0)
         {
            return res.json({
                'code': 201,
                'status': 'error',
                "message": 'Email already exits',
            });
         }
         else
         {
            Employee.insertMany(employeeData).then( result => {
                return res.json({
                    'code': 200,
                    'status': 'success',
                    "message": 'Student list get Successfully.',
                    "data" : result
                });
            })
        
         }
      });
     }    
}

function listEmployees(req,res){
    Employee.count().then(count => {
        if(count > 0)
        {
            Employee.find({}).then(data => {
                return res.json({
                    'code': 200,
                    'status': 'success',
                    "message": 'Employees List Successfully!.',
                    "data" : data
                });            
            })
        }
        else
        {
            return res.json({
                'code': 201,
                'status': 'success',
                "message": 'NO Data Found.',
            });
        }
    })
}