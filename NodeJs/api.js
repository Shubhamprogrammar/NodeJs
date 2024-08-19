const express = require("express");
const dbConnect = require("./mongodb")
const mongodb = require("mongodb")
const app = express();

app.use(express.json());  // for parsing application

app.get('/',async (req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
})

app.post('/',async (req,res)=>{
    console.log(req.body); // the body comes from the postman
    let data = await dbConnect();
    const result = data.insertOne(req.body);
    if((await result).acknowledged){
        res.send("Data inserted successsfully");
    }
})

app.put('/',async (req,res)=>{
    let data = await dbConnect();
    // through body
    const result = data.updateOne({price:req.body.price},{$set:req.body});
    if((await result).acknowledged){
        res.send("Data updated successsfully");
    }
})
// app.put('/:name',async (req,res)=>{
//     let data = await dbConnect();
//     // through params
//     const result = data.updateOne({name:req.params.name},{$set:req.body});
//     if((await result).acknowledged){
//         res.send("Data updated successsfully");
//     }
// })

app.delete('/:id',async (req,res)=>{
    let data = await dbConnect();
    const result= await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    res.send(result);
})

app.listen(5000);