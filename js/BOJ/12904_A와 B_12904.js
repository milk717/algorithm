const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [s,t] = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = t.split('');
while (s!== arr.join('')) {
    // console.log(arr)
    if(!arr.length){
        console.log(0);
        return;
    }
    if(arr.at(-1)==='A'){
        arr.pop();
    }else if(arr.at(-1)==='B') {
        arr.pop();
        arr.reverse();
    }
}
console.log(1);
