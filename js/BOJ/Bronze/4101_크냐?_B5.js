const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(input.map(ele=>{
    const arr = ele.split(' ');
    return +arr.at(0) > +arr.at(1) ? 'Yes' : 'No';
}).slice(0,-1).join('\n'))
