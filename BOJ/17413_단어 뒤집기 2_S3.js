const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let text = fs.readFileSync(filePath).toString().trim().split('');

let res = [];
let word = [];
let flag = false;
for (let i = 0; i < text.length; i++) {
    if (text[i] === '<') {
        flag = true;
        if (word.length) {
            res.push(word.join('').split(' ').map(v=>v.split('').reverse().join('')).join(' '));
            word = [];
        }
    }

    if (flag) {
        res.push(text[i]);
    } else {
        word.push(text[i]);
    }

    if (text[i] === '>') {
        flag = false;
        continue;
    }

    if (i === text.length - 1) {
        if (word.length) {
            res.push(word.join('').split(' ').map(v=>v.split('').reverse().join('')).join(' '));
        }
    }
}

console.log(res.join(''));
