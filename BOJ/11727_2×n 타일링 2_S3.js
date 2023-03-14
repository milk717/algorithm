function solution(n) {
    let arr = [0, 1, 3]
    for (let i = 3; i <= n; i++) {
        arr.push((arr[i-1] + 2*arr[i-2])%10007);
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


