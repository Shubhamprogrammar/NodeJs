const fs = require('fs');
const path = require('path')
const dirPath = path.join(__dirname,"files")

for (let index = 0; index < 5; index++) {
    fs.writeFileSync(`${dirPath}/hell${index}.txt`,`This is shubham and created the hell${index}.txt`);
    
}

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("The file name is: "+item);
    })
})