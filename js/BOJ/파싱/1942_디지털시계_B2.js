const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../../input.txt';
let list = fs.readFileSync(filePath).toString().trim().split("\n");

const stringToSecond = (str)=>{
    const [h,m,s] = str.split(':').map(v=>+v);
    return h*60*60 + m*60 + s;
}
const secondToNum = (second) => {
    const h =Math.floor(second/3600).toString().padStart(2,'0');
    second = second%3600;
    const m =Math.floor(second/60).toString().padStart(2,'0');
    const s =(second%60).toString().padStart(2,'0');
    // console.log(h,m,s)
    return +(h+m+s);
}

const res = [];
const dayEnd = stringToSecond('23:59:59')
list.forEach(v=>{
    let cnt = 0;
    let [start, end] = v.split(' ');
    start = stringToSecond(start);
    end = stringToSecond(end);
    if(start <= end){
        for(let i=start; i<=end; i++){
            if(secondToNum(i)%3 === 0) cnt++;
        }
    }else{
        for(let i=start; i<=dayEnd; i++){
            if(secondToNum(i)%3 === 0) cnt++;
        }
        for(let i=0; i<=end; i++){
            if(secondToNum(i)%3 === 0) cnt++;
        }
    }
    res.push(cnt);
});
console.log(res.join('\n'))
