const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').slice(0,-1);

let [num,...list] = input;
let [n,m] = num.split(' ').map(v=>+v);
list= list.map(v=>v.split(' ').map(ele=>+ele))


