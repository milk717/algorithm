const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../../input.txt';
let [n,m] = fs.readFileSync(filePath).toString().trim().split(' ');
n= +n;
m= +m;

const makeSequence = (arr, n, m) =>{
    if(arr.length === m){
        console.log(arr);
        return;
    }
    for(let i = 1; i<=n; i++){
        arr.push(i);
        makeSequence(arr,n,m);
        arr.pop();
    }
}

makeSequence([],n,m)
