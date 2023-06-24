const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const res = [];
for(let i = 0; i<15; i++){
    for(let j = 0; j < input.length; j++) {
        res.push(input[j][i] || '');
    }
}
console.log(res.join(''));
