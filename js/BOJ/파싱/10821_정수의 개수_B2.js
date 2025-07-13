const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let list = fs.readFileSync(filePath).toString().trim().split(',');

console.log(list.length)
