const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString();

console.log(input ? 'Leading the Way to the Future':'YONSEI')
