const express = require('express');
const Employee= require('../models/Employee');
const router = express.Router();


router.get('/',(req,res)=>{
    Employee.find().then((employees)=>{
        res.status(201).send(employees)
    }).catch((err)=>{
        res.status(404).send({
            status:"error",
            message:err.message
        })
    })
})


// reading the employee details
router.get('/:id',(req,res)=>{
    console.log(req.params.id)
    Employee.findById(req.params.id).then((employee)=>{
        console.log(employee)
        res.status(201).send(employee);
    }).catch((err)=>{
        res.status(404).send({
            message:"User not found",
            status:"error"
        })
    })
   
})




router.post('/',(req,res)=>{
    const body = req.body;
    const employee = new Employee(body);

    employee.save().then((emp)=>{
        // update the index of employee
        res.send(emp);
    }).catch((err)=>{
        res.status(404).send({
            status:"error",
            message:err.message
        })
    });
})


router.put('/:id',(req,res)=>{

    Employee.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((emp_data)=>{
        res.send(emp_data)
    }).catch((err)=>{
        res.status(404).send({
            status:"error",
            message:err.message
        })
    })
})


router.delete('/:id',(req,res)=>{
    Employee.findByIdAndDelete(req.params.id).then(()=>{
        res.send({
            message:"document deleted"
        })
    }).catch((err)=>{
        res.status(404).send({
            status:"error",
            message:err.message
        })
    })
})


module.exports = router;