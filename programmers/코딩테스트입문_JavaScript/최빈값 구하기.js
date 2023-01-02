/*
최빈값의 개수가 아니라 최빈값이 무엇인지 return해야한다.
문제를 꼼꼼하게 읽지 않아서 시간을 오래 사용했다.
 */

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