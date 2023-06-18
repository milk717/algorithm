// const arr = [3,5,7,9,1];
//
// const map = new Map();
// const res = [];
// arr.forEach(v=>{
//     map.set(v,(map.get(v)||0)+1);
// })
// map.forEach((v,k)=>{
//     if(v > 1) res.push(v);
// })
// console.log(res.length ? res:[-1]);

const type = {
    'BOOL': 1,
    'SHORT': 2,
    'FLOAT': 4,
    'INT': 8,
    'LONG': 16,
};
const arr = ['INT','INT','BOOL','SHORT','LONG'];
// const arr = ['INT','SHORT','FLOAT','INT','BOOL'];
// const arr = ['FLOAT','SHORT','BOOL','BOOL','BOOL','INT'];
// const arr = ["BOOL", "LONG", "SHORT", "LONG", "BOOL", "LONG", "BOOL", "LONG", "SHORT", "LONG", "LONG"];
let res = '';
arr.forEach(v=>{
    let sharp = '#'.repeat(type[v]);
    while(res.length % type[v] !== 0){
        res += '.';
    }
    res+=sharp;
});
let resArr = [];
for(let i=0; i<res.length; i+=8){
    let temp = res.slice(i, i+8).padEnd(8,'.');
    if(temp !== '.'.repeat(8)) resArr.push(temp);
}
if(resArr.length > 16){
    console.log('HALT');
}else{
    console.log(resArr.join(','));
}
