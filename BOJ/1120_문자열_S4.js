const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let [a,b] = input;

let res = 51;
let i = 0;

while (i < b.length - a.length) {
    let cnt = 0;
    let j = 0;
    while(j < a.length) {
        if(a[j]!==b[i+j]){
            cnt++;
        }
        j++;
    }
    res = Math.min(cnt, res);
    i++;
}

console.log(res)
