const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../../input.txt';
let n = +fs.readFileSync(filePath).toString().trim();

for (let i = n-1; i>=0;i--){
    let space = ' '.repeat(n-i-1);
    let star = '*'.repeat(2 * i + 1);
    console.log(space+star);
}
