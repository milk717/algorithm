const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, ...words] = input;
let cnt = 0;

for (const word of words) {
    let arr = new Array(26).fill(0);
    let i = 0;
    while (i < word.length) {
        let index = word[i].charCodeAt(0)-97;
        if(arr[index]=== 0){
            arr[index]= 1;
            i++;
        }else{
            if(word[i-1] === word[i]){
                i++;
            }else{
                break;
            }
        }
    }
    if(i === word.length){
        cnt++;
    }
}
console.log(cnt)
