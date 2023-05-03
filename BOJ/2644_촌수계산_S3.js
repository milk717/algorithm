// const fs = require("fs");
// const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
// let [n, num, m, ...list] = fs.readFileSync(filePath).toString().trim().split('\n');
// n = +n;
// let [a, b] = num.split(' ').map(v => +v);
// m = +m;
// list = list.map(v => v.split(' ').map(ele=>+ele));
//

let size = 5;
const visited = new Array(size).fill(0).map(v=>new Array(size).fill(0));
visited[1][1] = 3;

console.log(visited);
