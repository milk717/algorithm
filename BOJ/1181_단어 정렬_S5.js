const compareFn = (a,b) =>{
    if(a[1] === b[1]) {
        if(a[0] > b[0]){
            return 1;
        }else if(a[0] < b[0]){
            return -1;
        }else{
            return 0;
        }
    }
    return a[1]-b[1]
}
function solution(input) {
    return [...new Set(input.slice(1,))]
        .map(v=>[v, v.length])
        .sort((a,b)=>compareFn(a,b))
        .map(v=>v[0]);
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
    solution(input).forEach(v=>console.log(v));
    process.exit();
});


