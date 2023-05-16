const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [n, num, m, ...list] = fs.readFileSync(filePath).toString().trim().split('\n');
n = +n;
let [a, b] = num.split(' ').map(v => +v);
m = +m;
const treeDict = list
    .map(v => v.split(' ').map(ele=>+ele))
    .reduce((acc,cur)=>{
        if(acc.hasOwnProperty(cur[0])){
            acc[cur[0]].push(cur[1]);
        }else{
            acc[cur[0]] = [cur[1]]
        }
        if(acc.hasOwnProperty(cur[1])){
            acc[cur[1]].push(cur[0]);
        }else{
            acc[cur[1]] = [cur[0]]
        }
        return acc;
    },{});

const queue = [];
const visited = new Array(n + 1).fill(false);
queue.push([a,0]);
visited[a] = true;

while (queue.length) {
    let [cur, cnt] = queue.pop();
    visited[cur] = true;
    if(cur === b){
        console.log(cnt);
        return;
    }
    treeDict[cur].forEach(v=>{
        if(!visited[v]){
            queue.push([v,cnt+1]);
        }
    })
}

console.log(-1);
