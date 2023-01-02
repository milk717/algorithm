function solution(array) {
    let maxValue = Math.max(...array);
    let checkArr = new Array(maxValue+1).fill(0)

    for (let i = 0; i<array.length; i++){
        checkArr[array[i]] += 1
    }

    let res = checkArr.indexOf(Math.max(...checkArr));
    checkArr.sort((a,b) =>b-a)
    return checkArr[0] !== checkArr[1] ? res: -1
}

console.log(solution([1,1,2,2,3,3,4,4]))