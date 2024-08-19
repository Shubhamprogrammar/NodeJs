const http = require('http');
http.createServer((req,res)=>{
    res.write("<h1>Hello, this is Shubham</h1>");
    res.end();
}).listen(8080,()=>{
    console.log("Server is running");
});

function test(a){
    return a*10;
}
const test=(a)=>a*10;