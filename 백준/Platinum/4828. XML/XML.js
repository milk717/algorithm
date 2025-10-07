const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../../input.txt';
let list = fs.readFileSync(filePath).toString().trim().split("\n");

const isValidTag = (line) => {
    const stack = [];
    line = line.split(/(<\/*[a-z0-9]+>)/);
    for(let word of line){
        if(word.match(/(<[a-z0-9]+>)/)){
            stack.push(word);
        }else if(word.match(/(<\/[a-z0-9]+>)/)){
            if(stack.at(-1)?.slice(1,-1) === word?.slice(2,-1)){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return !!!stack.length;
}
const removeTag = (line) => {
    return line.replace(/(<\/*[a-z0-9]+>|<[a-z0-9]+\/*>)/g,'');
}
const isValidHex = (line) =>{
    return !line.match(/&x[A-Fa-f0-9]+;/g)?.some(num=>(num.length % 2 === 0));
}
const removeHex = (line) =>{
    return line.replace(/&x[A-Fa-f0-9]+;/g,'')
}
const isPlainText = (line) => {
    return !line.split('').some(word=>{
        const ascii = word.charCodeAt(0);
        return ascii < 32 || ascii > 127 || ascii === 60 || ascii === 62 || ascii === 38
    })
}
const removeCode = (line) =>{
    return line.replaceAll('&lt;', '')
        .replaceAll('&gt;', '')
        .replaceAll('&amp;', '');
}

const res = list.reduce((acc,line) => {
    if(!isValidTag(line)){
        acc.push('invalid');
        return acc;
    }
    line = removeTag(line);
    line = removeCode(line);
    if(!isValidHex(line)){
        acc.push('invalid');
        return acc;
    }
    line = removeHex(line);
    if(!isPlainText(line)){
        acc.push('invalid');
        return acc;
    }
    acc.push('valid');
    return acc;
},[]);
console.log(res.join('\n'));