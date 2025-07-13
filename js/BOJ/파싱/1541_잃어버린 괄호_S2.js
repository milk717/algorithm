const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let expression = fs.readFileSync(filePath).toString().trim();

const splitArr = expression.split('-');

let res = 0;
for(let i = 0; i < splitArr.length; i++){
    if(!splitArr[i]){
        splitArr[i] = '-';
        continue;
    }
    splitArr[i] = splitArr[i].split(/\D/).reduce((acc, cur) => acc + +cur, 0);
}
res = splitArr.reduce((acc,cur,index) => {
    if(!index){
        if(cur !== '-'){
            acc += cur;
        }
    }else{
        acc -= cur;
    }
    return acc
}, 0);

console.log(res)

