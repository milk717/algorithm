let input = require("fs").readFileSync(process.platform === "linux" ? '/dev/stdin' : 'input.txt').toString();
const happy = [...input.matchAll(`:-\\)`)].length;
const sad = [...input.matchAll(`:-\\(`)].length;
console.log(!happy&&!sad ? 'none':happy>sad ? 'happy' : happy === sad ? 'unsure' : 'sad');
