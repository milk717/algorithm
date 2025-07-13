const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [num,input] = fs.readFileSync(filePath).toString().trim().split('\n');

let [n,k] = num.split(' ').map(v=>+v);
let belt = input.split(' ').map(v=>+v);
//종료되었을 때 몇 번째 단계가 진행 중이었는지 구해보자 -> 몇 번째 사이클
//step1
const rotation = (belt,robotPosition,n) => {
    let last = belt.pop();
    belt.unshift(last);
    const size = robotPosition.size;
    let cnt = 0;
    for(let index of robotPosition.keys()){
        if(cnt===size) return;
        robotPosition.delete(index);
        if(index+1 !== n-1){
            robotPosition.add(index+1);
        }
        cnt++;
    }
}
//step2
const moveRobots = (belt,robotPosition, n) => {
    const size = robotPosition.size;
    let cnt = 0;
    for(let index of robotPosition.keys()){
        if(cnt===size) return;
        if(belt[index+1] >= 1 && !robotPosition.has(index+1)){
            belt[index+1]--;
            robotPosition.delete(index);
            if(index+1 !== n-1){
                robotPosition.add(index+1);
            }
        }
        cnt++;
    }
}
//step3
const addRobot = (belt, robotPosition) => {
    if(belt[0] > 0 && !robotPosition.has(0)){
        belt[0]--;
        robotPosition.add(0);
    }
}
//step4
const finish = (belt,k)=>{
    return belt.filter(v => !v).length >= k;
}

let cnt = 1;
let robotPosition = new Set();
while(true){
    rotation(belt,robotPosition,n);
    moveRobots(belt,robotPosition,n);
    addRobot(belt, robotPosition);
    if(finish(belt,k)){
        break;
    }else{
        cnt++;
    }
}
console.log(cnt);
