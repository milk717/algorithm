function solution(input) {
    let [a, b] = input.split(' ').map(v=>Number(v.split('').reverse().join('')));
    return Math.max(a,b);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    console.log(solution(input[0]))
    process.exit();
});


