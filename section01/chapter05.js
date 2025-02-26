// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 모듈러 연산

let inf = Infinity;
let minf = -Infinity;

let nan = NaN;
console.log(1 * "hello");

// 2. String Type
let myName = "이정환";
// let myName = 이정환; 같이 따옴표 안붙이면 변수로 인식하니 조심
let myLocation = "목동";
let introduce = myName + myLocation;

console.log(introduce);
// 이어붙인 문자열이 저장됨
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
// 백틱으로도 문자열 만들기가 가능

// 템플릿 리터럴 문법

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없을때)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);
