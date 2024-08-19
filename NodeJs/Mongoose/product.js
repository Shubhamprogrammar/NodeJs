const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name:String,
    roll:Number,
    course:String,
    college:String
})
module.exports= mongoose.model('products',ProductSchema);