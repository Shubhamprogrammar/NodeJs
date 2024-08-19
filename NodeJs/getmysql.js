const express = require("express");
const con = require("./config")
const app = express();

app.get("/",(req,res)=>{
    con.query("SELECT * from emp",(err,result)=>{
        if(err){
            res.send("Error occured");
        }
        else{
            res.send(result);
        }
    })
})
app.listen(5000);