function solution(s) {
    return [...s.split('},')
        .map(v=>v.split(',').map(ele=>ele.split('').filter(w=>Number.isInteger(+w)).join('')))
        .sort((a,b)=>a.length - b.length)
        .reduce((acc,cur)=>{
            cur.forEach(v=>acc.add(+v));
            return acc;
        },new Set())]
}
