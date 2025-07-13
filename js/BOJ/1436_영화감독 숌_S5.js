const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let n = +fs.readFileSync(filePath).toString().trim();

let cnt = 0;
for(let i = 666; ; i++){
    if(i.toString().match('666')){
        cnt++;
    }
    if(cnt === n) {
        console.log(i);
        break;
    }
}
