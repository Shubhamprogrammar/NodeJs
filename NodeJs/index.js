const app = require("./app")
console.log(app.z())
console.log(app.x)
console.log(app)

const arr=[2,4,5,9,8,7,3];
let res = arr.filter((item)=>{
    return item%2==0;
});
console.log(res);