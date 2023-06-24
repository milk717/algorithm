let [n,...l] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(l.reduce((a,c,i)=> (a +`Case #${i+1}: `+c.split(' ').reverse().join(' ') + '\n'),'').trim())
