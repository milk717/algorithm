const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const arr = [1, 1, 2, 2, 2, 8];
console.log(arr.map((v, i) => v - input[i]).join(' '));
