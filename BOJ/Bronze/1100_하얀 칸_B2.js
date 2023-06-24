const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let cnt = 0;
for(let i = 0; i<input.length; i++){
    for(let j = 0; j < input[0].length; j++) {
        if(i%2===j%2 && input[i][j] === 'F') cnt++;
    }
}
console.log(cnt);
