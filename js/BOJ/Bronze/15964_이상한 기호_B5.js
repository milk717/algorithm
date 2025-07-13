const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let [a,b] = input.map(v=>+v)

console.log((a+b)*(a-b))
