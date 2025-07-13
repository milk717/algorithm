const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ')[0];

let len = input.length;
let arr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let cnt = 0;

let i = 0;
while (i < len){
    let j = 0;
    for(j = 0; j <arr.length; j++){
        if(arr[j] === input.slice(i, i+arr[j].length)){
            cnt++;
            i += arr[j].length;
            break;
        }
    }
    if(j === arr.length){
        i++;
        cnt++;
    }
}

console.log(cnt)
