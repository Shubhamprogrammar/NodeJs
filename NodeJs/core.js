const fs=require('fs');
// fs.writeFileSync("hello.txt","Hello, this is shubham");
const gs=require('fs').writeFileSync; // This is also possible
gs("rad.txt","Shubham");
console.log(__dirname)
console.log(__filename)