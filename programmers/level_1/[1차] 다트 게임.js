function solution(dartResult) {
    let pointInfo = {
        "S"(point){
            return point
        },
        "D"(point){
            return point * point
        },
        "T"(point){
            return point * point * point
        },
        "*"(point){
            return point * 2
        },
        "#"(point){
            return -point
        },
    };
    return dartResult.split(/(\D)/).reduce((acc,cur)=>{
        if(+cur) {
            acc.push(+cur)
        }
        else if(cur.match(/\w|#/)){
            acc.push(pointInfo[cur]?.(acc.pop()))
        }
        else if(cur === '*') {
            let nowPoint = acc.pop();
            let prePoint = acc.pop();
            acc.push(pointInfo[cur]?.(prePoint))
            acc.push(pointInfo[cur]?.(nowPoint))
        }
        return acc
    },[]).reduce((acc,cur)=>acc+(cur || 0),0)
}
console.log(solution('1D2S#10S'))
console.log('1D2S#10S'.split(/(\D)/))
console.log('1D2S#10S'.split(''))