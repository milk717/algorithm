/*
rudece는 초기값을 지정해주지 않으면 배열의 첫 원소 값을 acc에 넣기 때문에 오류가 발생했다.
 */
function solution(array, n) {
    return array.reduce((acc, cur)=> acc + (cur === n),0)
}

console.log(solution([1, 1, 2, 3, 4, 5, 6, 1, 3, 2], 2))