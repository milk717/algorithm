function solution(n) {
    let arr = new Array(n).fill(0).map(()=>new Array(10).fill(BigInt(0)));
    arr[0].fill(BigInt(1));
    arr[0][0] = BigInt(0);
    for(let i = 1; i<n; i++){
        for(let j = 0; j<10; j++){
            if(j===0){
                arr[i][j] = arr[i-1][1]
            }else if(j===9){
                arr[i][j] = arr[i-1][8]
            }else{
                arr[i][j] = (arr[i-1][j-1] + arr[i-1][j+1])
            }
        }
    }
    return parseInt(arr[n-1].reduce((acc,cur)=>acc+cur) % BigInt(1000000000));
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(line) {
    input.push(line);
    rl.close();
}).on("close", function() {
    console.log(solution(+input))
    process.exit();
});