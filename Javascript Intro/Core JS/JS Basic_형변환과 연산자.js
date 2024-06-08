/*
형 변환
함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환됨.
이 외에, 전달받은 값을 의도적으로 원하는 타입으로 변환해주는 경우도 형 변환이다.

1. 문자형 형변환
alert메서드는 매개변수로 문자형을 받음. 그렇기 때문에 다른 형의 값을 받으면 문자형으로 자동 변환됨.
이외 String(value)함수를 호출해 전달받은 값을 문자열로 변환할 수도 있음

2. 숫자형 형변환
숫자형은 수학과 관련된 함수와 표현식에서 자동으로 형변환이 일어난다.

3. boolean 형변환
논리연산을 수행할 때 발생.
*/
let value = true;   // boolean
value = String(value);  // String으로 형변환
console.log(typeof value);

console.log ("6" / "2");    // 숫자형으로 변환하여 3이라는 결과를 반환
let str = "123";
console.log(typeof str);    // String
let num = Number(str);
console.log(typeof num);    // Number

console.log(Boolean(1));    // true. 숫자1은 true를 의미
console.log(Boolean(0));    // false. 숫자0은 false를 의미
console.log(Boolean("hello"));  // 값이 존재하므로 true
console.log(Boolean("0"));  // 0은 false이나 문자열 0은 값이 존재하므로 true
console.log(Boolean(""));   // 값이 비어있으므로(null) false

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
기본연산자
1. 단항, 이항, 피연산자
피연산자(=인수): 연산자가 아닌 것들. 즉, 연산자가 아닌 숫자들을 의미
단항: 하나의 피연산자를 받는 연산자
이항: 두 개의 피연산자를 받는 연산자

2. 나머지연산자, 거듭제곱연산자
나머지 연산자: %
거듭제곱 연산자: **

3. 연산자(+)와 형변환
JS에서 '+'연산자는 두 개의 피연산자 중 하나라도 문자열이면 문자열 연결 연산자로 동작

4. 쉼표연산자
쉼표연산자는 여러 표현식을 코드 한 줄에서 평가할 수 있게 해준다.
이 때 표현식 각각이 모두 평가되지만, '마지막 표현식의 평가 결과만 반환'된다는 점에 유의
*/
let x = 1;
let y = 3;
x = -x;
console.log(x);     // 단항 연산자
console.log(y - x); // 이항 연산자

console.log(5 % 2); // 1. 나머지 연산자
console.log(2 ** 3) // 8. 거듭제곱 연산자

console.log("Ez" + "Real"); // EzReal. 문자열 연결 연산자로 동작
console.log('1' + 2);       // "12". 하나라도 문자열이면 연결 연산자로 동작
console.log(2 + 2 + '1');   // "41"
console.log("EzReal" * 2);  // NaN. 문자열을 곱하면 오류가 발생
console.log("EzReal" / 2);  // NaN. 문자열을 숫자로 나누면 오류가 발생
console.log( +"2" + +"3");  // 5. 숫자형이 아닌 값들에 +를 붙여줄 경우 숫자형으로 변환해줌.

let a = (1 + 2, 3 + 4); // 쉼표연산자
console.log(a);     // 7. 마지막 표현식의 평가 결과만 반환된다.
for (a = 1, b = 3, c = a*b; a < 10; a++) { 
    // 마지막 결과만 반환한다는 점을 고려하였을 때, 다음과 같이 활용할 수도 있음.
}