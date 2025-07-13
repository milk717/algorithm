const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../../input.txt';
let [n,m] = fs.readFileSync(filePath).toString().trim().split(' ');
n= +n;
m= +m;

//1~n까지의 수를 사용해서 m길이의 수열을 생성
const makeSequence = (n, m, check, arr) =>{
    // console.log(n, m, check, arr)
    if (m===arr.length){
        console.log(arr.join(' '));
        // console.log(arr);
        return
    }
    for (let i = 0; i < n; i++){
        if (!check[i]){
            check[i] = true;
            arr.push(i+1);
            makeSequence(n, m, check, arr);
            check[i] = false;
            arr.pop()
        }
    }
}

makeSequence(n,m,new Array(n).fill(false), [])
