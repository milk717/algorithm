let scoreDiff = 0;
let resLion = [];
/*
어피치와 라이언의 화살 배열을 입력받아서 각자의 점수의 차이를 리턴해주는 함수
*/
const scoreCalc = (apeach, lion) => {
    let [apeachScore, lionScore] = [0,0];
    for (let i = 0; i<11; i++){
        if (apeach[i] >= lion[i] && apeach[i]){
            apeachScore += (10-i);
        }else if(apeach[i] < lion[i] && lion[i]){
            lionScore += (10-i);
        }
    }
    return lionScore-apeachScore;
}
/*
라이언이 쏠 수 있는 모든 경우의 수
*/
const arrowPositionCalc = (n,apeach,check,lion) =>{
    let newScoreDiff = scoreCalc(apeach,lion);
    if (scoreDiff <= newScoreDiff){
        resLion = lion.map(v=>v);
        scoreDiff = newScoreDiff;
    }
    if (n === 0){
        return
    }
    for (let i = 0; i<11; i++){
        if (!check[i]){
            check[i] = true;
            if (apeach[i]){ //어피치가 이미 맞춘 곳 일 때
                if (n > apeach[i]){ //현재 남은 화살로 쏠 수 있으면
                    lion[i] = apeach[i]+1;
                    arrowPositionCalc(n-(apeach[i]+1), apeach, check, lion);
                }
            }else{
                lion[i] = 1;
                arrowPositionCalc(n-1, apeach, check, lion);
            }
            check[i] = false;
            lion[i] = 0;
        }
    }
}

function solution(n, info) {
    let check = new Array(11).fill(false);
    let lion = new Array(11).fill(0);
    arrowPositionCalc(n, info, check, lion);

    if (!resLion.length || !scoreDiff){
        return [-1];
    }


    let arrowCnt = resLion.reduce((acc, cur) => acc + cur);
    if (arrowCnt < n){
        resLion[10] = n-arrowCnt;
    }
    return resLion;
}
