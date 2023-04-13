const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [...input] = fs.readFileSync(filePath).toString().trim().split(' ').map(v => +v);

const solution = (input) =>{
    let arr = new Array(6).fill(0);
    input.forEach(num => arr[num-1]++);

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 3){
            return 10000 + ((i+1) * 1000);
        }else if(arr[i] === 2){
            return 1000 + ((i+1) * 100);
        }
    }

    for (let i =arr.length - 1; i >= 0; i--){
        if(arr[i]){
            return ((i+1)*100);
        }
    }
}

console.log(solution(input));
