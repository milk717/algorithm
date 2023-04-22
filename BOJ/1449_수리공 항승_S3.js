const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [num,...list] = fs.readFileSync(filePath).toString().trim().split('\n');
let [n,l] = num.split(' ').map(v=>+v);
list = list[0].split(' ').map(v => +v).sort((a, b) => a - b);

let cnt = 0;
let tape = 0;
for (let i= 0; i<n; i++) {
    if(list[i] > tape){
        cnt++;
        tape = list[i]+l-1;
    }
}
console.log(cnt)
