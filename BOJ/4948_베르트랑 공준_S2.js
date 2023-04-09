const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [...list] = fs.readFileSync(filePath).toString().trim().split('\n').map(v=>+v).slice(0,-1);

let arr = new Array(123457*2 + 1).fill(1);
arr[0] = 0;
arr[1] = 0;
for (let i=2; i<=123457; i++){
    let j = 2
    while (i*j <= 123457*2){
        if(arr[i]===0){
            break;
        }
        arr[i*j] = 0;
        j++;
    }
}
let res = '';
list.forEach(v=>{
    let cnt = 0;
    for(let i = v+1; i <= 2*v; i++){
        if(arr[i]) cnt++;
    }
    res += cnt;
    res += '\n';
});

console.log(res.trim())
