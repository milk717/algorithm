//1회차
const decimalToBinary = (num) => {
    return num.toString(2);
}
const hash = (data, row_begin, row_end) => {
    let res = new Array(20).fill('0');
    for(let i = row_begin-1; i<row_end; i++){
        let cnt = 0;
        for(let j = 0; j<data[0].length; j++){
            cnt += (data[i][j] % (i+1));
        }
        cnt = decimalToBinary(cnt);
        for(let j = cnt.length-1; j>=0; j--){
            let index = res.length - cnt.length + j;
            res[index] = (res[index] === cnt[j] ? '0':'1');
        }
    }
    return Number.parseInt(res.join(''),2);
}
function solution(data, col, row_begin, row_end) {
    const sortedData = data.sort((a,b)=>{
        if(a[col-1]>b[col-1]) return 1;
        else if(a[col-1]<b[col-1]) return -1;
        else{
            if(a[0]>b[0]) return -1;
            else if(a[0]<b[0]) return 1;
            else return 0;
        }
    });
    return hash(sortedData, row_begin, row_end)
}
//리펙터링
const hash = (data, row_begin, row_end) => {
    let res = 0;
    for(let i = row_begin-1; i<row_end; i++){
        let cnt = 0;
        for(let j = 0; j<data[0].length; j++){
            cnt += (data[i][j] % (i+1));
        }
        res = cnt ^ res;
    }
    return res;
}
function solution(data, col, row_begin, row_end) {
    return hash(data.sort((a,b)=>(a[col-1]-b[col-1] || b[0]-a[0])), row_begin, row_end)
}
