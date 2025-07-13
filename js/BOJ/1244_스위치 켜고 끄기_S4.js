const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [n,switchList, m, ...peopleList] = fs.readFileSync(filePath).toString().trim().split('\n');
switchList = switchList.split(' ').map(v => +v);
peopleList = peopleList.map(v=>v.split(' ').map(p =>+p))

for(let i = 0; i<m; i++){
    let [sex, num] = peopleList[i];
    if(sex === 2){
        num--;
        switchList[num] = +!switchList[num];
        for(let j = 1; j<n/2; j++){
            if(num-j >= 0 && num+j < n){
                if(switchList[num-j] === switchList[num+j]){
                    switchList[num-j] = +!switchList[num-j];
                    switchList[num + j] = +!switchList[num + j];
                }else{
                    break;
                }
            }
        }
    }else{
        for (let j = 1; j * num <= n; j++) {
            switchList[num*j - 1] = +!switchList[num*j - 1];
        }
    }
}

let res = '';

switchList.forEach((v,i)=>{
    res += v;
    if(i !== 0 && (i+1)%20 === 0){
        res += '\n';
    }else{
        res += ' ';
    }
})

console.log(res);
