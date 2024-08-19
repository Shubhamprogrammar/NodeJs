const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,"files");
const filePath = `${dirPath}/simple.txt`

// fs.writeFileSync(filePath,"This is simple text file");

// fs.readFile(filePath,"UTF-8",(err,item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath,"\nThis is so good, just looking like a wow",(err)=>{
//     if(!err){
//         console.log("File is updated successfully");
//     }
// })

// fs.rename(filePath,`${dirPath}/simp.txt`,(err)=>{
//     if(!err){
//         console.log("File name is updated");
//     }
// })

fs.unlinkSync(`${dirPath}/simp.txt`)