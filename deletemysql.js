const express = require("express");
const app = express();

const con = require("./config")
app.use(express.json());
app.delete("/:no",(req,res)=>{
    con.query("Delete from emp where emp_no=?",req.params.no,(err,result,fields)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.listen(5000);