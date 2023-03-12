const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let word = input[0].split('');

console.log(word.map(v=>v.charCodeAt() > 96 ? v.toUpperCase() : v.toLowerCase()).join(''))
