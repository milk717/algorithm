const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [n,m] = input[0].split( ' ');

for(let i = 0; i<Number(n); i++){
    let a = input[i+1].split(' ');
    let b = input[Number(n)+i+1].split(' ');
    let arr = [];
    for(let j = 0; j<Number(m); j++){
        arr.push(Number(a[j]) + Number(b[j]))
    }
    console.log(arr.join(' '))
}
