const express = require("express");
const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();

let count=0;
event.on("countAPI",()=>{
    count++;
    console.log("Event called",count);
})

app.get('/',(req,res)=>{
    res.send("API called");
    event.emit("countAPI");
});
app.get('/search',(req,res)=>{
    res.send("Search API called");
    event.emit("countAPI");
});
app.get('/update',(req,res)=>{
    res.send("Update API called");
    event.emit("countAPI");
});

app.listen(5000);