const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map(v=>+v)

console.log((input[0] * input[1])+(input[2] * input[3]))
