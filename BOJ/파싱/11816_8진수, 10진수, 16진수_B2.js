const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../../input.txt';
let num = fs.readFileSync(filePath).toString().trim();

if(num.at(1) === 'x'){
    console.log(Number.parseInt(num,16))
}else if(num.at(0) === '0'){
    console.log(Number.parseInt(num,8))
}else{
    console.log(num)
}
