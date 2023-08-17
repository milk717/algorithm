const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let byte = +fs.readFileSync(filePath).toString()

console.log(new Array(+(byte / 4)).fill('long').join(' ')+' int')
