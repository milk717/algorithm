
/*
sort에서 || 사용하는거 기억하자
 */
function solution(numlist,n) {
    return numlist.sort((a,b)=>Math.abs(a-n) - Math.abs(b-n) || b-a)
}

console.log(solution([600, 400, 300, 200, 700, 800, 100, 900], 500))