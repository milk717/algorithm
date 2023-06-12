function solution(players, callings) {
    const playersIndex = players
        .reduce((acc, cur, index) => {
            acc[cur] = index;
            return acc;
        }, {});
    callings.forEach((player) => {
        let curIndex = playersIndex[player];
        let tmp;
        tmp = players[curIndex];
        players[curIndex] = players[curIndex - 1];
        players[curIndex - 1] = tmp;

        playersIndex[player] -= 1;
        playersIndex[players[curIndex]] += 1;
    });
    return players;
}
