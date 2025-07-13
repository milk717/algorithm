let [num,list] = require("fs").readFileSync(process.platform === "linux" ? '/dev/stdin' : 'input.txt').toString().trim()
                .split('\n');
let [n,m] = num.split(' ').map(v=>+v);
list = list.split(',').map(v=>+v);
let arr = list.map(v=>v);
for(let k = 0; k<m; k++){
    const temp = [];
    for(let i = 1; i<arr.length; i++){
        temp.push(arr[i]-arr[i-1]);
    }
    arr = temp.map(v=>v);
}
console.log(arr.join(','));
