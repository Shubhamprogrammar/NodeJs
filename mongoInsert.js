const dbConnect = require("./mongodb");

const insert = async () =>{
    const db = await dbConnect();
    const result = await db.insertMany([{name:"Airdopes", brand:"Truike",price:900, category:"Airdopes"},{name:"Cupboard", brand:"National",price:3000, category:"Furniture"},{name:"Sewing Machine", brand:"Usha",price:5000, category:"Electrics"}]);
    if((await result).acknowledged){
        console.log("Data is inserted");
    }
    else{
        console.log("Failed");
    }
}


insert();