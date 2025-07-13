const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let html = fs.readFileSync(filePath).toString().trim().split('\n').join(' ').split(/\s+/)

const res = [];
let line = '';
html.forEach(word=>{
    if(word==='<br>'){
        res.push(line.trim());
        line = '';
    }else if(word==='<hr>'){
        if(line.length){
            res.push(line.trim());
            line = ''
        }
        res.push('-'.repeat(80));
    }else{
        if(line.length + word.length > 80){
            res.push(line.trim());
            line = '';
        }
        line += `${word} `;
    }
});
res.push(line.trim());
console.log(res.join('\n'));
