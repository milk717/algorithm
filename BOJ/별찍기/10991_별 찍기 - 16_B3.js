const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../../input.txt';
let n = +fs.readFileSync(filePath).toString().trim();

for (let i = 0; i < n;i++){
    let space = ' '.repeat(n-i-1);
    let line = '';
    for(let j = 0; j<2*(i+1); j++){
        if(j % 2 === 0){
            line += '*';
        }else{
            line += ' ';
        }
    }
    console.log(space + line);
}
