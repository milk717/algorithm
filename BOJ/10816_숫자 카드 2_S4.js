const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [n, arr1, m, arr2] = input;

n = +n;
m = +m;
arr1 = arr1.split(' ').map(v=>+v);
arr2 = arr2.split(' ').map(v=>+v);

let hash = {};

arr1.forEach(v=>{
    if(hash.hasOwnProperty(v)){
        hash[v] += 1;
    }else{
        hash[v] = 1;
    }
});

console.log(arr2.map(v=>hash[v] || 0).join(' '))
