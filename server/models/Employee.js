const mongoose = require('mongoose');

// EMP_NO, EMP_NAME, AGE, EMP_DESIGNATION AND SALARY.
const employeeSchema = new mongoose.Schema({
    emp_name: {
        type:String,
        required:true
    },
    dob: {
        type:Date,
        required:true
    },
    emp_designation: {
        type:String,
        required:true
    },
    salary: {
        type:String,
        required:true
    }
})


module.exports =  mongoose.model('Employee',employeeSchema);