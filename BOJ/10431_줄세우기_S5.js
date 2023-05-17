const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [n,...list] = fs.readFileSync(filePath).toString().trim().split('\n');
n = +n;
list = list.map(ele => ele.split(' ').map(v => +v).slice(1,));

for(let c = 0; c<n; c++) {
    const line = list[c];
    let cnt = 0;
    for(let i = 1; i<line.length; i++){
        let v = line[i];
        let j = i;
        while (v < line[j-1]){
            line[j] = line[j - 1];
            j -=1;
            cnt++;
        }
        line[j] = v;
    }
    console.log(c+1,cnt)
}
