const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [[n,m,k],[...arr]] = fs.readFileSync(filePath).toString().trim().split('\n').map(v=>v.split(' ').map(ele=>+ele))

arr.sort((a,b)=>b-a)

// 가장 큰수 몇번 더해짐?
let maxCnt = Math.floor(m / (k+1)) * k;
// 그다음 큰수 반복하면?
let nextMaxCnt = m - maxCnt;

let result = arr[0]*maxCnt + arr[1]*nextMaxCnt;

console.log(result)
