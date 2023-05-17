const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let list = fs.readFileSync(filePath).toString().trim().split('\n').slice(0,-1)

const cntLine = (board, ch) =>{
    let cnt = 0;
    let line = ch.repeat(3);
    for (let i = 0; i < 3; i++){
        cnt += (board.slice(3*i, 3*(i+1)) === line);    //가로 틱택토
        cnt += ((board[i] + board[3+i] + board[6+i]) === line); //세로 틱택토
    }
    cnt += (board[0] + board[4] + board[8] === line);
    cnt += (board[2] + board[4] + board[6] === line);
    return cnt
}
const cntCh = (board, ch) =>{
    return board.split('').reduce((acc, cur) => acc + (cur === ch),0);
}

const isValid = (firstLineCnt, secondLineCnt, firstCnt, secondCnt)=>{
    //보드가 비어있는 경우
    if(!firstCnt && !secondCnt) return 1;
    //승자가 두명인 경우
    if(firstLineCnt===1 && secondLineCnt===1) return 0;
    //선공 후공의 순서가 바뀐 경우
    if(firstCnt < secondCnt) return 0;
    //O와 X의 차이가 1 이상 나는 경우
    if(firstCnt-secondCnt > 1) return 0;

    //승자가 있고 유효한 경우
    if(firstLineCnt === 1){
        if(firstCnt === secondCnt + 1){
            return 1;
        }
        return 0;
    }
    if(secondLineCnt === 1){
        if(firstCnt === secondCnt){
            return 1;
        }
        return 0;
    }
    if(firstLineCnt === 2){
        if(firstCnt === secondCnt + 1){
            return 1;
        }
        return 0;
    }

    if(firstCnt + secondCnt === 9){
        if(firstCnt === secondCnt + 1){
            return 1;
        }
        return 0;
    }

    return 0
}

let res = ''
for(let i = 0; i <list.length; i++){
    let secondLineCnt = cntLine(list[i],'O');
    let firstLineCnt = cntLine(list[i],'X');
    let secondCnt = cntCh(list[i], 'O');
    let firstCnt = cntCh(list[i], 'X');

    res += isValid(firstLineCnt, secondLineCnt, firstCnt,secondCnt) ? 'valid' : 'invalid';
    res += '\n';
}
console.log(res.trim());
