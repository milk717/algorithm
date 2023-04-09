const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [[n,m,k],[...arr]] = fs.readFileSync(filePath).toString().trim().split('\n').map(v=>v.split(' ').map(ele=>+ele))

