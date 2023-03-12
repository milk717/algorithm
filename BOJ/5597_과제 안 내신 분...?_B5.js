const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let arr = new Array(30).fill(0);

input.forEach((v)=>arr[+v-1]++)

arr.forEach((v,i)=>!v && console.log(i+1))