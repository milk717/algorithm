function solution(n,arr1,m,arr2) {
    let res = new Array(m).fill(0);
    arr1.sort((a,b)=>a-b);
    for(let i = 0; i<m; i++){
        let target = arr2[i];
        let lo = 0;
        let hi = n-1;
        // console.log(target, lo, hi);
        // console.log(arr1);
        while(lo <= hi){
            // console.log(target, lo, hi, res);
            let mid = Math.floor((lo+hi)/2);
            if(arr1[mid] === target){
                let cnt = 1;
                let left = mid-1;
                let right = mid+1;
                while (arr1.at(left) === arr1[mid]){
                    cnt++;
                    left-=1;
                }
                while (arr1.at(right) === arr1[mid]){
                    cnt++;
                    right+=1;
                }
                res[i] =cnt;
                break;
            }
            else if(arr1[mid] < target){
                lo = mid + 1;
            }else if(arr1[mid] > target){
                hi = mid - 1;
            }
        }
    }
    return res.join(' ');
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(line) {
    input.push(line);
    if(input.length >= 4){
        rl.close();
    }
}).on("close", function() {
    let [n,arr1, m,arr2] = input;
    arr1 = arr1.split(' ').map(v=>+v);
    arr2 = arr2.split(' ').map(v=>+v);
    console.log(solution(+n,arr1,+m,arr2));
    process.exit();
});