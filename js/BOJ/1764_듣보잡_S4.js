const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [num,...list] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n,m] = num.split(' ').map(v=>+v);

const map = new Map();
list.forEach(v=>{
    map.set(v,(map.get(v) || 0)+1);
});
let res = [];
map.forEach((value,key)=>{
    if(value>1)res.push(key);
});
res.sort();
console.log(res.length+'\n' + res.join('\n'));
