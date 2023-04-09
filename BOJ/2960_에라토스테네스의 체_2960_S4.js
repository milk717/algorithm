const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [n,m] = fs.readFileSync(filePath).toString().trim().split(' ').map(v=>+v)

const eratos = (n,m) =>{
    let arr = new Array(n+1).fill(1);
    let cnt = 0;
    let i = 2;
    let j = 1;

    for (i=2; i<=n; i++){
        j = 1
        while (i*j <= n){
            if(arr[i*j]){
                cnt++;
                arr[i*j] = 0;
                // console.log(i*j)
            }
            if(cnt === m){
                return i*j
            }
            j++;
        }
    }
}

console.log(eratos(n,m))
