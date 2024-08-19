const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    console.log("Request is sent by ",req.query);
    res.send(`<h1>Hello this is shubham</h1><br>
    <a href="/about">Go to about page</a>`);
});
app.get("/about",(req,res)=>{
    res.send(`
    <input type="text" placeholder="Username" /><br>
    <button>Click me</button><br>
    <a href="/help">Go to help page</a>`);
});
app.get("/help",(req,res)=>{
    res.send(`
    [
        {
            name:Shubham Maurya,
            roll_no : 52
        },
        {
            name:Apurv Borkar,
            roll_no: 18
        }
    ]<br>
    <a href="/">Go to home page</a>
    `);
});
app.listen(5050,()=>{
    console.log("Server is running");
})