const dbConnect = require("./mongodb");

const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data.updateMany({name:"Airdopes"},{$set:{price:899,category:"Electornics"}});
    console.log(result)
}

updateData();