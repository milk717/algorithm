const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [num, heightString] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");
const heightList = heightString
    .trim()
    .split(" ")
    .map((v) => +v);

const result = new Array(Number(num)).fill(null);

for (let i = 0; i < heightList.length; i++) {
    let pointer = heightList[i];
    while (result[pointer]) {
        pointer++;
    }
    result[pointer] = i;
}

console.log(result);
