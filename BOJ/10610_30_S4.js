const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const isTrue = !(input.split('').filter(v=>v).reduce((acc,cur)=>acc+(+cur),0) % 3) && input.match('0');

if(isTrue) {
    console.log(input.split('').sort((a,b)=>b-a).join(''));
}else{
    console.log(-1);
}

