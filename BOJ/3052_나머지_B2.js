function solution(input) {
    let arr = new Set();
    input.forEach(v=>arr.add(v%42));
    return arr.size;
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
    console.log(solution(input))
    process.exit();
});


