const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../../input.txt';
let n = +fs.readFileSync(filePath).toString().trim();

for (let i = 0; i < n;i++){
    let space = ' '.repeat(n-i-1);
    let star = '*'.repeat(2 * i + 1);
    console.log(space+star);
}

for (let i = n-2; i>=0;i--){
    let space = ' '.repeat(n-i-1);
    let star = '*'.repeat(2 * i + 1);
    console.log(space+star);
}
