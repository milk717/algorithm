const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [num, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
let [n,m] = num.split(' ').map(v=>+v);

let cnt = 0;
const map = new Map();
input.slice(0,n).forEach(v=>map.set(v,true));
cnt = input.slice(n,n+m).reduce((acc,cur)=>acc + (map.has(cur) ? 1:0),0);
console.log(cnt);
