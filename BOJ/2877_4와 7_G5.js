const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
// let n = +fs.readFileSync(filePath).toString().trim().split('\n');
let n = 3
const arr = [4,7];
const res = [];
while(n>0){
    n--;
    res.push(arr[n%2]);
    n = ~~(n/2);
}
console.log(res.reverse().join(''));
