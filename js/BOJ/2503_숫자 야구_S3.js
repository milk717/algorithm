const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').slice(0,-1);

let [n, ...list] = input;
let arr = [];

for(let i = 1; i < 10; i++){
    for(let j = 1; j <10; j++){
        for(let k = 1; k < 10; k++){
            if(i !== j && j !== k && i!==k){
                arr.push(`${i}${j}${k}`);
            }
        }
    }
}

let cnt = 0;

for (let num of arr){
    let isAvailable = false;
    for(let item of list) {
        let [s, b] = [0, 0];
        let [question, strike, ball] = item.split(' ');

        for (let i = 0; i < 3; i++){
            if(question[i] === num[i]){
                s++;
            }else{
                if(num.includes(question[i])){
                    b++;
                }
            }
        }
        if(s=== +strike && b=== +ball){
            isAvailable = true;
        }else{
            isAvailable = false;
            break;
        }
    }
    cnt += isAvailable ? 1:0;
}

console.log(cnt)
