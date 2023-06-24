const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [n,...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const res = [];
for(let i = 0; i<input[0].length; i++){
    let temp = input[0][i];
    for(let j = 0; j<input.length; j++){
        if(temp !== input[j][i]){
            temp = '?';
            break;
        }
        temp = input[j][i];
    }
    res.push(temp);
}
console.log(res.join(''));
