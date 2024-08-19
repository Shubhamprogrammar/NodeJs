const mysql = require("mysql")

const con = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"Bappa88$",
    database:"college"
});

module.exports=con;