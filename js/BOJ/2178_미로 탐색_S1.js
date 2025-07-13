const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [num,...list] = fs.readFileSync(filePath).toString().trim().split('\n');
let [n,m] = num.split(' ').map(v=>+v);
list = list.map(v=>v.split('').map(ele=>+ele));

let xMove = [0, 1, 0, -1];
let yMove = [1, 0, -1, 0];
let visited = new Array(n).fill(0).map(v=>new Array(m).fill(0));

let queue = [[0,0,1]];

while(queue.length !== 0){
    let [row,col,cnt] = queue.shift();
    if(row === n-1 && col === m-1){
        console.log(cnt);
        break;
    }
    for (let i=0; i<=4; i++){
        let r = row + xMove[i];
        let c = col + yMove[i];

        if(r >=0 && r < n && c >=0 && c < m){
            if(!visited[r][c] && list[r][c]){
                queue.push([r,c,cnt+1]);
                visited[r][c] = 1;
            }
        }
    }
}

