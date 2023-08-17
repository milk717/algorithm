const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

console.log(input.at(0).length >= input.at(1).length ? 'go':'no')
