function solution(n) {
    let arr = [0, 0];
    for(let i = 2; i<=n; i++){
        let value = i;
        let min = n;
        if(i%3 === 0){
            min = Math.min(min, arr[value/3]+1);
        }
        if(i%2===0){
            min = Math.min(min, arr[value/2]+1);
        }
        min = Math.min(min, arr[value-1]+1);
        arr.push(min)
    }
    return arr[n];
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input;
rl.on("line", function(line) {
    input = line;
    rl.close();
}).on("close", function() {
    console.log(solution(+input))
    process.exit();
});


