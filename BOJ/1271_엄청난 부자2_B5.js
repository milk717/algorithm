const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let [n,m] = input;
n = BigInt(n);
m = BigInt(m);
console.log(n/m+'\n'+n%m);
