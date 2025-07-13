const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [num,...list] = fs.readFileSync(filePath).toString().trim().split('\n');
let [n,l] = num.split(' ').map(v=>+v);
list = list
    .map(v => v.split(' ').map(ele=>+ele))
    .sort((a,b) =>a[0]-b[0]);

let cnt = 0;
let wood = 0;
for (let i = 0; i < n; i++) {
    let [start, end] = list[i];
    start = Math.max(wood, start);
    end = Math.max(wood, end);
    cnt += Math.ceil( (end-start)/l);
    wood = start + (Math.ceil( (end-start)/l) * l);
}

console.log(cnt)
