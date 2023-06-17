const fs = require("fs");
const filePath = process.platform === "linux" ? '/dev/stdin' : '../input.txt';
let [n,...str] = fs.readFileSync(filePath).toString().trim().split('\n');

const modeInfo = {
    '0001': {name: 'Numeric', cntBits: 10},
    '0010': {name: 'Alphanumeric', cntBits: 9},
    '0100': {name: '8bit', cntBits: 8},
    '1000': {name: 'Kanji', cntBits: 8},
    '0000': {name: 'Termination', cntBits: 0},
};
const alpha = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','<SP>','$','%','*','+','-','.','/',':'];
const hexToBinary = (hex) => {
    let res = [];
    for(let i = 0; i < hex.length; i++){
        res.push(parseInt(hex[i], 16).toString(2).padStart(4,0));
    }
    return res.join('');
}
const binaryToDecimal = (num) => {
    return parseInt(num, 2);
}
const calcDataLen = (modeName,cntBits,charCnt) =>{
    let len = 4+cntBits;
    switch (modeName){
        case 'Numeric':
            len+= Math.floor(charCnt/3)*10 + (charCnt%3 === 2 ? 7:4);
            break;
        case 'Alphanumeric':
            len += Math.floor(charCnt/2)*11 + (charCnt%2 ? 6:0);
            break;
        case '8bit':
            len += charCnt*8;
            break;
        case 'Kanji':
            len += charCnt*13;
            break;
    }
    return len;
}
const sliceData = (modeName, charCnt,code) => {
    let arr = [];
    switch (modeName){
        case 'Numeric':
            for(let i = 0; i<code.length; i+=10){
                arr.push(code.slice(i,i+10))
            }
            break;
        case 'Alphanumeric':
            for(let i = 0; i<code.length; i+=11){
                arr.push(code.slice(i,i+11))
            }
            break;
        case '8bit':
            for(let i = 0; i<code.length; i+=8){
                arr.push(code.slice(i,i+8))
            }
            break;
        case 'Kanji':
            for(let i = 0; i<code.length; i+=13){
                arr.push(code.slice(i,i+13))
            }
            break;
    }
    return arr
}
const codeToText = (modeName,dataArr) => {
    let arr = [];
    let cnt = 0;
    switch (modeName){
        case 'Numeric':
            for(let i = 0; i<dataArr.length; i++){
                arr.push(binaryToDecimal(dataArr[i]).toString().padStart(3,'0'));
            }
            arr = arr.join('');
            cnt += arr.length;
            break;
        case 'Alphanumeric':
            for(let i = 0; i<dataArr.length; i++){
                let temp = binaryToDecimal(dataArr[i]);
                if(dataArr[i].length > 6) {
                    arr.push(alpha[Math.floor(temp / 45)]);
                    arr.push(alpha[temp % 45]);
                }else{
                    arr.push(alpha[temp]);
                }
            }
            arr = arr.join('');
            cnt+=arr.length;
            break;
        case '8bit':
            for(let i = 0; i<dataArr.length; i++){
                const temp = binaryToDecimal(dataArr[i]).toString(16).toUpperCase();
                const tempToDecimal = parseInt(temp,16);
                if(parseInt('20',16) <= tempToDecimal  && parseInt('7e',16) >= tempToDecimal){
                    if(tempToDecimal === 35){
                        arr.push('\\');
                    }
                    arr.push(String.fromCharCode(tempToDecimal));
                }else{
                    arr.push('\\');
                    arr.push(temp);
                }
                cnt++;
            }
            arr = arr.join('');
            break;
        case 'Kanji':
            for(let i = 0; i<dataArr.length; i++){
                const binary = dataArr[i];
                const temp = binaryToDecimal(binary.slice(1,binary.length)).toString(16).toUpperCase();
                const tempToDecimal = parseInt(temp,16);
                if(parseInt('20',16) <= tempToDecimal  && parseInt('7e',16) >= tempToDecimal){
                    if(tempToDecimal === 35){
                        arr.push('\\');
                    }
                    arr.push(binary[0]);
                    arr.push(String.fromCharCode(tempToDecimal));
                }else{
                    arr.push('#');
                    arr.push(binary[0]);
                    arr.push(temp);
                }
                cnt++;
            }
            arr = arr.join('');
            break;
    }
    return [cnt,arr];
}
const res = [];
str.forEach((code,index)=>{
    const resText = [];
    let totalCnt = 0;
    // console.log(index)
    let binary = hexToBinary(code);
    let i = 0;
    while (true){
        let nowMode =  binary.slice(i,binary.length);
        const mode = modeInfo[nowMode.slice(0,4)];
        const name = mode?.name || 'Termination';
        const cntBits = mode?.cntBits;
        if(name === 'Termination') break;
        const charCnt = binaryToDecimal(nowMode.slice(4, 4+cntBits));
        const nextCodeIndex = calcDataLen(name, cntBits, charCnt);
        i+= nextCodeIndex;
        // console.log(name, nowMode,charCnt)
        const dataCode = nowMode.slice(4+cntBits, nextCodeIndex);
        const codeArr = sliceData(name, charCnt,dataCode);
        // console.log(name,codeArr)
        const [cnt,text] = codeToText(name, codeArr);
        totalCnt+=cnt;
        resText.push(text);
    }
    res.push(totalCnt+' '+resText.join(''));
});
console.log(res.join('\n'))
