/*
구조 분해 할당으로 파이썬 swap 처럼 사용할 수 있는거 기억하기
 */

function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2],my_string[num1]];
    return my_string.join('');
}

console.log(solution('HELLO',1,2))