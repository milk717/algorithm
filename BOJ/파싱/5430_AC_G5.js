const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [n,...list] = fs.readFileSync(filePath).toString().trim().split('\n');

class Dequeue {
    constructor(list) {
        this.list = list;
        this.front = 0;
        this.rear = list.length;
        this.size = list.length;
    }
    pop(){
        this.rear--;
        this.size--;
    }
    popFront(){
        this.front++;
        this.size--;
    }
    error(){
        return this.front > this.rear || this.size < 0;
    }
    returnList(){
        return this.list.slice(this.front, this.rear);
    }
}

let res = '';
for(let i=0; i<n*3; i += 3) {
    const p = list[i].split('');
    const arr = list[i+2].slice(1,list[i+2].length-1).split(',').filter(v=>v);
    const dequeue = new Dequeue(arr);
    let isReversed = false;
    p.forEach(code =>{
        if(code === 'R'){
            isReversed = !isReversed;
        }else{
            if(isReversed){
                dequeue.pop();
            }else{
                dequeue.popFront();
            }
        }
    });
    if(dequeue.error()){
        res += 'error';
    }else{
        if(isReversed){
            res += `[${dequeue.returnList().reverse()}]`;
        }else{
            res += `[${dequeue.returnList()}]`;
        }
    }
    res += '\n';
}
console.log(res);
