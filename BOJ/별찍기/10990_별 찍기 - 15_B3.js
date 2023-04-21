const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../../input.txt';
let n = +fs.readFileSync(filePath).toString().trim();

for (let i = 0; i < n;i++){
    let space = ' '.repeat(n-i-1) + '*';
    if(i===0){
        console.log(space);
    }else{
        let middleSpace = ' '.repeat(2*i - 1)+'*';
        console.log(space+middleSpace);
    }
}
