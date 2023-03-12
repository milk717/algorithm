function solution(input) {
    let result;
    input.forEach(v=>{
        let [n, word] = input;
        result =  word.split('').map(el=>el.repeat(n)).join('')
    });
    return result;
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
    let n = parseInt(input[0]);
    for(let i = 0 ;i<n; i++){
        let list = input[i+1].split(' ')
        list[0] = +list[0];
        console.log(solution(list))
    }
    process.exit();
});
