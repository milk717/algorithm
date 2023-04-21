const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../../input.txt';
let n = +fs.readFileSync(filePath).toString().trim();

for (let i = 0; i <n;i++){
    let star = '*'.repeat(i + 1);
    console.log(star);
}
for (let i = n-2; i>=0;i--){
    let star = '*'.repeat(i + 1);
    console.log(star);
}
