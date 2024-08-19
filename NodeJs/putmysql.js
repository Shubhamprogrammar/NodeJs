const express = require("express");
const con = require("./config");
const app=express();

app.use(express.json())

app.put("/:id",(req,res)=>{
    const data = [req.body.emp_name,req.body.emp_dept_no,req.params.id]
    con.query("Update emp set emp_name=?,emp_dept_no=? where emp_no=?",data,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.listen(5000);