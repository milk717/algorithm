function solution(board) {
    // console.log(board)
    let visitArr = Array.from(Array(board.length), ()=>new Array(board[0].length).fill(false))
    let xdots = [1,0,-1,0,-1,1,-1,1]
    let ydots = [0,-1,0,1,1,1,-1,-1]
    for (let i = 0; i<board.length; i++) {
        for(let j=0; j<board[i].length; j++) {
            if (board[i][j] === 1 && !visitArr[i][j]){
                for(let k=0; k<xdots.length; k++){
                    let x = j + xdots[k]
                    let y = i + ydots[k]
                    if(x>=0 && x < board[i].length && y >=0 && y < board.length && board[y][x] !== 1){
                        board[y][x] = 1
                        visitArr[y][x] = true;
                    }
                }
            }
        }
    }
    // console.log(board)
    return board.flat().reduce((acc,cur) => acc+(cur === 0?1:0),0)
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]))
