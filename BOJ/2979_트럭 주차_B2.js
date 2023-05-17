const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [cost,...list] = fs.readFileSync(filePath).toString().trim().split('\n');
cost = cost.split(' ').map(v => +v);
list = list.map(ele => ele.split(' ').map(v => +v));

let res = 0;
let arr = new Array(101).fill(0);
for(let i = 0; i < list.length; i++){
    for(let j = list[i][0]; j < list[i][1]; j++){
        arr[j]++;
    }
}

for(let i = 0; i < 101; i++){
    if(arr[i]){
        res += (arr[i] * cost[arr[i] - 1]);
    }
}
console.log(res)
