const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let html = fs.readFileSync(filePath).toString().trim().split(/<\/*main>/)[1];
const res = [];
html.split(/<div |<p>|<\/div>/).forEach(line=>{
    if(line==='') return;
    if(line.slice(0,5) === 'title'){
        res.push(`title : ${line.split('\"')[1]}`)
    }else if(line.slice(-4, line.length) === '</p>'){
        line = line.split(/<\s*\w*\s*>|<\/\s*\w*\s*>/).join('').trim();
        line = line.replace(/\s+/g, ' ');
        res.push(line)
    }
})
console.log(res.join('\n'))
