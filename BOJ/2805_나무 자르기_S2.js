function solution(n,m,arr) {
    arr = arr.split(' ').map(v=>+v);
    let lo = 0;
    let hi = arr.reduce((acc,cur)=>acc < cur ? cur:acc,0);
    let mid;

    let res = 0;

    while(lo <= hi){
        mid = Math.floor((lo+hi)/2);
        let wood = arr.reduce((acc,cur)=>acc + (cur-mid <= 0 ? 0:cur-mid),0);
        if(wood >= m){
            if(res < mid){
                res = mid;
            }
            lo = mid+1;
        }else if(wood < m){
            hi = mid-1;
        }
    }
    return res;
}

// console.log(solution(4,4, '2 2 5 6'));

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(line) {
    input.push(line);
    if(input.length >= 2){
        rl.close();
    }
}).on("close", function() {
    let [num,arr] = input;
    let [n, m] = num.split(' ').map(v=>+v);
    console.log(solution(+n, +m, arr))
    process.exit();
});