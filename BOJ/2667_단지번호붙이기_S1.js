const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').slice(0,-1);

let [n, ...list] = input;
n = +n;

let queue = [];
let visited = new Array(n).fill(0).map(_=>new Array(n).fill(false));
let colPoint = [0,1,0,-1];
let rowPoint = [1,0,-1,0];
let res = [];
let cnt = 0;

for(let i = 0; i<n; i++){
    for(let j = 0; j<n; j++){
        if(!visited[i][j]&&list[i][j] === '1'){
            queue.push([i,j]);
            visited[i][j] = true;
            cnt++;
            while (queue.length){
                let [row,col] = queue.shift();
                for(let k = 0; k<4; k++){
                    let newRow = row+rowPoint[k];
                    let newCol = col+colPoint[k];
                    if(newRow >= 0 && newRow < n){
                        if(newCol >= 0 && newCol < n){
                            if(!visited[newRow][newCol] && list[newRow][newCol] === '1'){
                                queue.push([newRow, newCol]);
                                visited[newRow][newCol] = true;
                                cnt++;
                            }
                        }
                    }
                }
            }
            res.push(cnt);
            cnt=0;
        }
    }
}


console.log(res.length+'\n'+res.sort((a,b)=>a-b).join('\n'))
