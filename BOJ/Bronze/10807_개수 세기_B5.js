const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let v = input[2];
let arr = input[1].split(' ');

console.log(arr.reduce((acc,cur)=>acc+(v===cur),0))
