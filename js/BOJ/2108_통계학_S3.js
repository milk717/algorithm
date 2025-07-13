const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [n, ...list] = fs.readFileSync(filePath).toString().trim().split('\n');
n = +n;
list = list.map(v => +v).sort((a, b) => b - a);

let maxValue = Math.max(...list);
let minValue = Math.min(...list);

let mean = Math.round(list.reduce((acc, cur) => acc + cur) / n);
let median = list[Math.floor(n / 2)];
let range = maxValue - minValue;
if(n===1){
    console.log(list+'\n'+list+'\n'+list+'\n'+range+'\n');
    return
}
let mode = list
    .reduce((acc, cur) => {
        acc[cur - minValue][0] = cur;
        acc[cur - minValue][1] += 1;
        return acc;
    }, new Array(range + 1).fill(0).map(_=>new Array(2).fill(0)))
    .sort((a, b) =>b[1]-a[1])

mode = (mode[0][1] === mode[1][1] ? mode[1][0] : mode[0][0])

console.log(`${mean}
${median}
${mode}
${range}`)
