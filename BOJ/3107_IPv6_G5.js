const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(':');

if(input[0] === ''){
    input.shift();
}
if(input.at(-1)===''){
    input.pop();
}
const res = input.reduce((acc,cur)=>{
    acc.push(cur.padStart(4,'0'));
    if(cur === ''){
        for(let i=0; i<8-input.length; i++){
            acc.push('0000');
        }
    }
    return acc;
},[]).join(':');
console.log(res);
