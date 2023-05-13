const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [n,list] = fs.readFileSync(filePath).toString().trim().split('\n');
list = list.split(' ').map(v => +v);
n = +n;

let result = new Array(n).fill(0);
for(let i = 0; i < n; i++) {
    let tempCnt = 0;
    for(let j =n-1; j >= i+list[i]-tempCnt; j--){
        tempCnt += result[j] ? 1:0;
    }
    result[i+list[i]-tempCnt] = i+1;
}

console.log(result.join(' ').trim());

//5 3 7 1 4 2 1 0 0 0
//8 4 7 2 6 1 9 5 10 3

//3 1 1 0
//4 2 3 1

//4 3 3 1 1 0
//6 4 5 2 1 3

