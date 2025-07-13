const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [size,...tomato] = fs.readFileSync(filePath).toString().trim().split('\n');
let [n, m, h] = size.split(' ').map(v => +v);
tomato = tomato.map(ele => ele.split(' ').map(v => +v));


const boxList = [];
for (let i = 0; i<h; i++){
    const tmpList = [];
    for(let j = 0; j<m; j++){
        tmpList.push(tomato[j+(i*m)]);
    }
    boxList.push(tmpList);
}

const visited = new Array(h).fill(0).map(_=>new Array(m).fill(0).map(_=>new Array(n).fill(0)));

const heiList = [1,-1,0,0,0,0];
const rowList = [0,0,-1,1,0,0];
const colList = [0,0,0,0,-1,1];

const queue = [];

// console.log(boxList);
for(let i = 0; i < h; i++){
    for(let j = 0; j <m; j++){
        for(let k = 0; k <n; k++){
            if(boxList[i][j][k] === 1){
                queue.push([i,j,k,0])
                visited[i][j][k] = 1;
            }
        }
    }
}
let day = 0;
while (queue.length !== 0){
    const [curHei,curRow, curCol,cnt] = queue.shift();
    day = cnt;

    for(let i = 0; i <6; i++){
        let [tarHei, tarRow, tarCol] = [curHei + heiList[i], curRow + rowList[i], curCol + colList[i]];
        if(tarHei >= 0 && tarHei < h){
            if(tarRow >= 0 && tarRow < m){
                if(tarCol >= 0 && tarCol < n){
                    if(!visited[tarHei][tarRow][tarCol] && boxList[tarHei][tarRow][tarCol] === 0){
                        visited[tarHei][tarRow][tarCol] = 1;
                        queue.push([tarHei, tarRow, tarCol, cnt+1]);
                    }
                }
            }
        }
    }
}

for(let i = 0; i < h; i++){
    for(let j = 0; j <m; j++){
        for(let k = 0; k <n; k++){
            if(boxList[i][j][k] === 0){
                console.log(-1);
                return;
            }
        }
    }
}
console.log(day);
