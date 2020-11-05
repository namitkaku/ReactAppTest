'use strict';

module.exports = function (express) {
    var router = express.Router();
    var EmployeeController = require('../controllers/EmployeeController');
    router.post('/add-employee', EmployeeController.addEmployee);
    return router;
}