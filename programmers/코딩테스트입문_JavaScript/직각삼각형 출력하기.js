/*
JavaScript에서 입력받는 방법
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];


rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(solution(Number(input[0])));
});

function solution(n){
    let res = '';
    for (let i = 0; i<n; i++){
        res += '*'.repeat(i+1)
        res += '\n'
    }
    return res;
}