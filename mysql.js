const mysql = require("mysql")

const con = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"Bappa88$",
    database:"college"
});

con.connect((err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("Connected successfully");
    }
});

con.query("SELECT * FROM emp",(err,result)=>{
    console.log("result: ",result);
})