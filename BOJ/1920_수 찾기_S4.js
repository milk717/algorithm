function solution(n, a, m, b) {
    let arrN = a.split(' ').map(v=>+v).sort((a,b)=>a-b);
    let arrM = b.split(' ').map(v=>+v);
    let result = new Array(m).fill(0);

    for(let i = 0; i<m; i++){
        let left = 0;
        let right = n - 1;
        while(left <= right){
            let mid = Math.floor((left+right)/2);
            if(arrN[mid] === arrM[i]){
                result[i] = 1;
                break;
            }else if (arrN[mid] < arrM[i]){
                left = mid + 1;
            }else if (arrN[mid] > arrM[i]){
                right = mid - 1;
            }
        }
    }
    return result.join('\n');
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
    let [n, a, m, b] = input;
    console.log(solution(+n,a, +m,b))
    process.exit();
});