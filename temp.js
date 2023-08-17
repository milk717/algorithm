const names = ['milk717','sumin','minsu'];
const str = 'My name is sumin';
const regExp = new RegExp(`/${names.join('|')}/`);

console.log(str.match(regExp)) //[ 'sumin', index: 11, input: 'My name is sumin', groups: undefined ]
