const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [num,...list] = fs.readFileSync(filePath).toString().trim().split('\n');
let [n,l] = num.split(' ').map(v=>+v);
list = list[0].split(' ').map(v => +v);

console.log(list)
