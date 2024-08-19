const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");
    const productSchema = new mongoose.Schema({
        name:String,
        roll:Number,
        course:String,
        college:String
    });
const main = async ()=>{   
    const productModel = mongoose.model('products',productSchema);
    let data = new productModel({name:"Shubham",roll:1,course:"Computer Science",college:"SIES"});
    let result = await data.save();
    console.log(result);
}

const updateInDB = async ()=>{
    const productModel = mongoose.model('products',productSchema);
    let data = await productModel.updateOne({name:"Shubham"},{$set:{roll:52}});
    console.log(data)
}

// updateInDB();

const deletInDB = async () =>{
    const productModel = mongoose.model('products',productSchema);
    let data = await productModel.deleteOne({name:"Shubham"});
    console.log(data);
}

// deletInDB();

const finInDB = async ()=>{
    const productModel = mongoose.model('products',productSchema);
    let data = await productModel.find();
    console.log(data);
}

finInDB();