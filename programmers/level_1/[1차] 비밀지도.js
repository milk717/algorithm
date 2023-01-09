/*
padStart(2,'0') => 두자릿수 채움, 채움숫자 0
ex) 3 => 03
 */
function solution(n, arr1, arr2) {
    return arr1.map((v,i)=>(v | arr2[i]).toString(2).padStart(n,'0').replace(/(1|0)/g,w=> +w ? '#':' '))
}