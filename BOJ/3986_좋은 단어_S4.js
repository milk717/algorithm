const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [n,...list] = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(list.reduce((acc,cur)=>{
    let stack = [];
    cur.split('').forEach(v=>{
        if(stack.length === 0){
            stack.push(v);
        }else if(stack.at(-1) !== v){
            stack.push(v);
        }else{
            stack.pop();
        }
    });
    return acc+(stack.length === 0 ? 1:0);
},0))
