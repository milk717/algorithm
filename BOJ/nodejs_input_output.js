const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ')
console.log(input)
//개행 없이 출력
// process.stdout.write('문자열');
