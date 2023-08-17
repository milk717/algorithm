const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

console.log(input.map(v => BigInt(v)).reduce((acc, cur) => acc + cur).toString())
