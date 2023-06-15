const popBlock = (m,n,board)=>{
    const popIndex = [];
    for(let i = 0; i<m-1; i++){
        for(let j = 0; j<n-1; j++){
            if(board[i][j] === board[i][j+1]){
                if(board[i+1][j] === board[i+1][j+1]){
                    if(board[i][j] === board[i+1][j+1] && board[i][j]){
                        popIndex.push([i,j],[i,j+1],[i+1,j],[i+1,j+1]);
                    }
                }
            }
        }
    }
    popIndex.forEach(v=>board[v[0]][v[1]] = null);
    return board;
}
const relocation = (m,n,board) => {
    // console.log(board);
    for(let i = 0; i<n; i++){
        let temp = [];
        for(let j = 0; j<m; j++){
            temp.push(board[j][i]);
        }
        temp.sort((a,b)=>{
            if(!a && b) return -1;
            else if(a&&!b) return 1;
            else return 0;
        });
        for(let j = 0; j<m; j++){
            board[j][i] = temp[j];
        }
    }
    // console.log(board);
    return board;
}
const countNull = (m,n,board)=>{
    let cnt = 0;
    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            if(board[i][j] === null){
                cnt++;
            }
        }
    }
    return cnt;
}

function solution(m, n, board) {
    board = board.map(v=>v.split(''));
    let afterCnt = 0;
    let beforeCnt = -1;
    while(afterCnt !== beforeCnt){
        beforeCnt = afterCnt;용
        board = popBlock(m,n,board);
        board = relocation(m,n,board);
        afterCnt = countNull(m,n,board);
    }
    return beforeCnt;
}
