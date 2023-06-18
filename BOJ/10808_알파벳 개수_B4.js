const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const res = input.split('').reduce((acc,cur)=>{
    acc[cur.charCodeAt(0) - 97]++;
    return acc;
},new Array(26).fill(0));
console.log(res.join(' '));
