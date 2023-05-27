const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [num, num2, ...list] = fs.readFileSync(filePath).toString().trim().split('\n');
let [n, m] = num.split(' ').map(v => +v);
let [r,c,d] = num2.split(' ').map(v => +v);
list = list.map(v => v.split(' ').map(ele => +ele));

const moveRobot = (n,m,r,c,d, list) => {
    const move = [[-1, 0], [0, -1],[1, 0],[0, 1]];
    let cnt = 0;
    let curRow = r
    let curCol = c
    let nextD =(4-d)%4;
    while (true){
        // console.log('cur = ',curRow,curCol)
        //1. 현재 칸이 아직 청소되지 않은 경 우, 현재 칸을 청소한다.
        if(!list[curRow][curCol]){
            list[curRow][curCol] = 1;
            cnt++
        }
        let nextRow;
        let nextCol;
        let tempNextD = nextD;
        //2. 주변에 청소되지 않은 칸이 있는지 탐색
        while (true){
            nextD = (nextD+1)%4;
            nextRow = curRow+move[nextD][0];
            nextCol = curCol+move[nextD][1];

            if(nextRow > 0 && nextRow < n && nextCol > 0 && nextCol < m){
                if(list[nextRow][nextCol] === 0){
                    break;
                }
            }

            if(tempNextD === nextD){
                nextRow = curRow+move[(tempNextD+2)%4][0];
                nextCol = curCol+move[(tempNextD+2)%4][1];
                if(nextRow < 0 || nextRow >= n ||nextCol < 0 || nextCol >= m){
                    return cnt;
                }
                break;
            }
        }

        curRow = nextRow;
        curCol = nextCol;
    }
}
console.log(moveRobot(n, m, r, c,d,list))
