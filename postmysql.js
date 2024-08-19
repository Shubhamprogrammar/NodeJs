const express = require("express")
const con = require("./config")
const app = express()


app.use(express.json()); // to parse the incoming requests with JSON payloads
app.post("/",(req,res)=>{
    // const data = {"emp_no":6,"emp_name":"Shubham Maurya","emp_desg":"Developer","emp_sal":1000000,"emp_dept_no":5};
    con.query("Insert into emp SET ?",req.body,(err,result,fields)=>{
        if(err){
            err;
        }
        else{
            res.send(result);
        }
    })
});
app.listen(5000);