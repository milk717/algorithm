function solution(answers) {
    let res = [0, 0, 0];
    let pattern1 = [1, 2, 3, 4, 5];
    let pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    for (let i in answers) {
        res[0] += (answers[i] === pattern1[i % 5])
        res[1] += (answers[i] === pattern2[i % 8])
        res[2] += (answers[i] === pattern3[i % 10])
    }
    let max = Math.max(...res);
    return res.reduce((acc, cur, index) => {
        if(cur === max){
            acc.push(index + 1)
        }
        return acc
    }, [])
}

console.log(solution([1, 3, 2, 4, 2]))