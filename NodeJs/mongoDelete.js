const dbConnect = require("./mongodb");

const deleteData = async () =>{
    let data = await dbConnect();
    let result = await data.deleteOne({name:"Airdopes"});
    if(result.acknowledged){
        console.log("Data deleted successfully");
    }
    else{
        console.log("Deletion Failed");
    }
}

deleteData();