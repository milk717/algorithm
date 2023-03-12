
function solution() {
    let scope = [-0.5364, 0.5193]
    let valueArr = new Array(1000).fill(0).map((_,i)=>(i+scope[0])/1000)
    valueArr = valueArr.map(v=>v+scope[0])
    return valueArr.at(0)
}

console.log(solution())