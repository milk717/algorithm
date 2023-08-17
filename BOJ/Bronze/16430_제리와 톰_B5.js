const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

console.log(+input[1]-input[0], input[1])
