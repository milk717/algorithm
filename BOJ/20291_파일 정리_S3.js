const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [n, ...files] = fs.readFileSync(filePath).toString().trim().split('\n');
n = +n;
const extenstionMap = {};
files.forEach((file)=>{
    const extension = file.split('.')[1];
    if(extenstionMap.hasOwnProperty(extension)){
        extenstionMap[extension] += 1;
    }else{
        extenstionMap[extension] = 1;
    }
});
let res = '';
for (const v of Object.keys(extenstionMap).sort()){
    res += `${v} ${extenstionMap[v]}`
    res += '\n';
}
console.log(res.trim());

