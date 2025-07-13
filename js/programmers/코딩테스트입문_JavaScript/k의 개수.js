function solution(array, n) {
    return array.sort((a,b)=>a-b).map(v=>[v, Math.abs(v-n)]).sort((a,b)=>a[1]-b[1])[0][0];
}
// console.log(solution(3,2)
console.log(solution([1, 100,10,11,12],4))
