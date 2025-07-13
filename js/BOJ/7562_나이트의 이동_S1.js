const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let list = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +list[0];
let i = 0;
while (i<n*3) {
    let size = +list[i + 1];
    let [strRow, strCol] = list[i + 2].split(' ').map(v=>+v);
    let [desRow, desCol] = list[i + 3].split(' ').map(v=>+v);
    i += 3;
    // console.log(size,strRow,strCol,desRow,desCol);
    const visited = new Array(size).fill(0).map(v=>new Array(size).fill(0));

    const move = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];
    const queue = [[strRow, strCol, 0]];
    visited[strRow][strCol] = 1;

    while (queue.length !== 0) {
        let [curRow, curCol, cnt] = queue.shift();
        // console.log(curRow, curCol, cnt);
        // console.log(visited)
        if(curRow === desRow &&curCol === desCol){
            console.log(cnt);
            break;
        }

        for(let j = 0; j<8; j++){
            let [targetRow, targetCol] = [curRow + move[j][0], curCol + move[j][1]];
            // console.log(targetRow, targetCol)
            if (targetRow >= 0 && targetRow < size){
                if (targetCol >= 0 && targetCol < size){
                    if (visited[targetRow][targetCol] === 0){
                        queue.push([targetRow, targetCol, cnt+1]);
                        visited[targetRow][targetCol] = 1;
                    }
                }
            }
        }
    }
}

