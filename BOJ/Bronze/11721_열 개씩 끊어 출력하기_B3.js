const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const arr = [];
for(let i = 0; i<input.length; i+=10){
    arr.push(input.slice(i,i+10));
}
console.log(arr.join('\n'));
