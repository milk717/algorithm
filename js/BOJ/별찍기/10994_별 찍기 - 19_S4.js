const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../../input.txt';
let n = +fs.readFileSync(filePath).toString().trim();

for (let i = 1; i < (4*n+1)/2-1;i++){
    let left = '';
    let right = '';
    let middle = '';
    if(i % 2 === 1){
        middle = '*'.repeat(4 * (n-i/2) - 1);
    }else if(i % 2 === 0){
        middle = ' '.repeat(Math.max(4 * (n-i/2) - 3,0));
    }
    left = '* '.repeat(Math.round((i-1)/2))
    right = ' *'.repeat(Math.round((i-1)/2))
    console.log(left+middle+right)
}

for (let i = Math.floor((4*n+1)/2) - 2 ; i > 0;i--){
    let left = '';
    let right = '';
    let middle = '';
    if(i % 2 === 1){
        middle = '*'.repeat(4 * (n-i/2) - 1);
    }else if(i % 2 === 0){
        middle = ' '.repeat(Math.max(4 * (n-i/2) - 3,0));
    }
    left = '* '.repeat(Math.round((i-1)/2))
    right = ' *'.repeat(Math.round((i-1)/2))
    console.log(left+middle+right)
}
