/*
처음에 짠 코드의 로직
1. num1과 num2의 최소공배수로 통분한 다음 덧셈을 한다
2. 덧셈된 결과의 분자와 분모의 최대공약수로 약분한다.

하지만 생각해보니 최대공약수로 약분할거라면 굳이 최소공배수로 통분할 필요가 없었다.
그래서 다음과 같은 코드를 작성했다.
 */

function Gcd(a,b){
    return a%b === 0? b:Gcd(b,a%b)
}

function solution(denum1, num1, denum2, num2) {
    let [a, b] = [denum1*num2 + denum2*num1, num1*num2];
    let gcd = Gcd(a,b);

    return [a/gcd, b/gcd]
}