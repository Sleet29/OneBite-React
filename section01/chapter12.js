// 1. 함수 표현식
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
// console.log(varA); // 함수를 변수에 담게되면 funcA 함수 자체가 출력됨

// 함수 표현식 (호이스팅 적용되지 않음)
let varB = function (funcB) {
  // ()괄호안을 생략해도 문제가 되지 않음. 익명함수!
  //   console.log("funcB");
};

varB();

// funcB()와 같은 식으로 호출은 불가.

// 2. 화살표 함수
// let varC = () => {
//   return 1;
// };

// 값을 반환하는 간단한 형태라면 let varC = () => 1;과 같이 표현도 가능
// 만약 매개변수 필요하다면 괄호안에 매개변수 넣으면됨
// let varC = (value) => value + 1;
// console.log(varC(10));

let varD = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varD(10));
