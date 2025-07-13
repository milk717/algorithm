const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [n,...list] = fs.readFileSync(filePath).toString().trim().split('\n');
list = list.map(v=>v.split(' '));
n = +n;

const map = {};
list.forEach(e => {
    if(map.hasOwnProperty(e[0])){
        map[e[0]].push(+e[1]);
    }else{
        map[e[0]] = [+e[1]];
    }

    if (map.hasOwnProperty(e[1])){
        map[e[1]].push(+e[0]);
    }else{
        map[e[1]] = [+e[0]];
    }
});

const res = {};
const queue = [];
const visited = new Array(n).fill(false);

map[1].forEach(e => {
    queue.push(e);
    res[e] = 1;
});
while (queue.length){
    let cur = queue.shift();
    visited[cur] = true;
    map[cur]?.forEach(e=>{
        if(!visited[e]){
            queue.push(e);
            res[e] = cur;
        }
    });
}
let ptr = '';
for(let i = 2; i<=n; i++){
    ptr += (res[i]+'\n');
}
console.log(ptr.trim());
