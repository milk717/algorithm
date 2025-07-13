const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [arithmetic, m, num] = fs.readFileSync(filePath).toString().trim().split('\n');

let [A, B] = arithmetic.split(' ').map(v => +v);
m = +m;
let [...list] = num.split(' ').map(v => +v);

let res = 0;
list.forEach((v,i)=>{
    res += v*Math.pow(A,m-1-i);
})

let resArr = [];
while(res){
    resArr.push(res%B);
    res /= B
    res= Math.floor(res);
}
console.log(resArr.reverse().join(' '));
