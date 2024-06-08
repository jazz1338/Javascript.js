/*
변수 (let)
1. let은 최신, var는 예전에 사용된 변수 선언 방식
2. 과거에는 let 없이도 단순하게 값을 할당해 변수를 생성하는 것이 가능했다. 예를 들어 let num = 5;가 아니라 num = 5;가 가능했었다.
3. JS 또한 카멜 표기법을 통상적으로 사용
4. 변수명은 문자와 숫자 외에도 $와 _ 또한 사용할 수 있으며, 첫 글자로 숫자는 사용할 수 없다.
5. JS는 대소문자를 구별한다. 즉, apple와 AplLE는 서로 다른 변수이다.
6. 당연하지만 let, class, return, function과 같은 예약어는 변수명으로 사용할 수 없다.

상수 (const)
1. 상수는 const를 사용한다.
2. 상수는 바뀌지 않는 변수. 그러므로 상수는 재할당할 수 없으며, 그렇기 때문에 상수를 변경하면 에러가 발생한다.
3. 상수와 대문자
    - 기억하기 힘든 값을 변수에 할당해 별칭으로 사용하는 값 = 대문자 및 밑줄 (‘하드 코딩한’ 값의 별칭을 만들 때)
    - 런타임 과정에서 계산되지만 최초 할당 이후 값이 변하지 않는 상수의 경우 소문자로 표기하는게 편함
*/
let admin;
let name = "John";

admin = name;

console.log(admin);

const BIRTHDAY = '20240607'
// const age = someCode(BIRTHDAY);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
자료형
JS의 변수는 Python과 같이 자료형에 관계없이 모든 데이터일 수 있음. 
이처럼 자료의 타입은 있지만 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어를 dynamic typed language라고 부른다.

1.숫자형
숫자형은 정수 및 부동소수점 숫자를 나타낸다.
숫자형은 Infinity, -Infinity, NaN과 같은 '특수 숫자 값'이 포함된다.
현실에선 특수 숫자 값을 숫자로 취급하지 않지만, JS에서는 특수 숫자 값을 숫자형으로 분류한다.

1.1BigInt
정수 -> -(2^53 - 1) ~ (2^53 - 1)
하지만 암호 관련 작업같이 아주 큰 숫자가 필요할 경우, 혹은 아주 높은 정밀도로 작업을 할 경우 BigInt를 사용

2.문자형
큰따옴표, 작은따옴표, 백틱(``)
백틱의 경우, 변수나 표현식을 감싼 후 ${...}안에 넣어주면, 변수나 표현식을 문자열 중간에 넣을 수 있다.
Java의 경우 글자형(char)이 따로 있지만, JS의 경우 문자형만 존재한다.

3.불린형
JS의 경우 불린형 또한 let을 활용해 true와 false를 활용한다.

4.NULL
null은 어느 자료형에도 속하지 않는 값
null 또한 let을 활용하여 변수처럼 사용한다.
다른 언어에서 null은 '존재하지 않는 객체에 대한 참조' 또는 '널 포인터'를 나타낼 때 사용
그런 JS의 경우 '존재하지 않는 값', '비어 있는 값', '알 수 없는 값'을 나타내는데 사용된다.

5.undefined값
undefined 또한 null값처럼 자신만의 자료형을 형성한다.
undefined는 '값이 할당되지 않은 상태'를 나타낼 때 사용한다.
변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당된다.

6.객체와 심볼
객체(object)형은 특수한 자료형.
객체형을 제외한 다른 자료형은 문자 혹은 숫자 한 가지만 표현할 수 있기에 원시 자료형이라 부른다.
하지만 객체형은 데이터 컬렉션이나 복잡한 개체를 표현할 수 있다.
심볼형은 객체의 고유한 식별자를 만들 때 사용된다.

7.type of
인수의 자료형을 반환한다.
자료형에 따라 처리 방식을 다르게 하고 싶거나 변수의 자료형을 알아내고자 할 때 유용하다.
*/
let message = "hello";
let number = 123;

console.log ( 1 / 0 );   // Infinity
console.log (Infinity);
console.log ( "숫자가 아님" / 2 );  // NaN. 문자열을 숫자로 나누면 오류가 발생

const bigInt = 12345678901234567890123456789012345678901234567890n; // 끝에 n을 붙이면 BigInt가 된다.

let name_2 = 'John';
console.log(`Hello, ${name_2}`);    // 백틱을 활용해 문자열 내에 변수를 넣을 수 있다.

let trueOrFalse = true;
let falseOrTrue = false;
let isGreater = 4 > 1;
console.log (isGreater);    // true 반환

let age_2 = null;

let age;
console.log(age);   // undefined 반환

typeof 0    // "number"
typeof 10n  // "bigInt"
typeof true // "boolean"
typeof Symbol("id") // "symbol"
typeof Math // "object". 수학연산을 제공하는 내장 객체(=객체형)이므로 object가 출력된다.
typeof null // "object". null은 별도의 자료형을 갖는 특수 값으로 객체가 아니지만, object로 출력됨. 즉, null은 객체가 아니다.
typeof alert // "function". 함수도 객체형에 속하지만, 오래전에 만들어진 규칙이었기 때문에 함수는 object가 아닌 function으로 반환함. 즉, 함수는 객체형이 맞다.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
문제 1. 변수 선언 및 자료형
JS에서 '+'연산자는 두 개의 피연산자 중 하나라도 문자열이면 문자열 연결 연산자로 동작
*/
let a = 10;
let b = "20";
let c = a + b;  // a를 숫자형에서 문자형으로 변환
console.log(c); // 결과: 1020

let a_2 = 10;
let b_2 = "20";
let c_2 = a + Number(b);    // b를 숫자형으로 변환
console.log(c_2); // 결과: 30

/*
문제 2. 비교연산자
==  : 느슨한 동등 비교. 두 값의 자료형이 다를 때 JS가 자동으로 형 변환을 수행한 후 비교한다.
=== : 엄격한 동등 비교. 두 값과 자료형이 모두 같아야 true를 반환
*/
let m = 5;
let n = "5";
console.log(m == n);    // 형변환하기 때문에 true
console.log(m === n);   // 자료형이 다르므로 false
console.log(m != n);    // false
console.log(m !== n);   // true

/*
문제 3. 논리연산자
*/
let p = true;
let q = false;
console.log(p && q);    // false. 두 피연산자가 모두 true일 때만 true를 반환
console.log(p || q);    // true. 두 피연산자 중 하나라도 true면 true를 반환
console.log(!p);
console.log(!q);