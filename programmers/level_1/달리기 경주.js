function solution(players, callings) {
    callings.forEach((cur)=>{
        let curIndex = players.findIndex(v=>v===cur);
        let tmp;
        tmp = players[curIndex];
        players[curIndex] = players[curIndex-1];
        players[curIndex - 1] = tmp;
    });
    return players;
}
