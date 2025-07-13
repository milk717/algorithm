const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../../input.txt';
let list = fs.readFileSync(filePath).toString().trim().split(',').reduce((acc,cur)=>acc+ +cur,0);
console.log(list)
