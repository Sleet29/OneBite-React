function funcA() {
  let a = 1;
}

// console.log(a);

// 결과는 어떨까? -> 당연히 오류발생 / 지역 스코프!

// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프 (어디에서나 접근 가능)

function funcA() {
  // let a = 1;
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {} // 함수도 지역 스코프를 갖는다... 그러나 ?  -> 조건문 or 반복문 내에서는 지역 스코프를 가지지 않는다 ***************
  // 함수 선언식만 그렇다고 이해!
}

funcA();

// console.log(b);

if (true) {
  let c = 1; // 블록 내 변수들은 지역 스코프를 갖는다
}

for (let i = 0; i < 10; i++) {
  let d = 1;
}

// console.log(i); // 이런식으로 반복문 내부에서 선언해도 외부에서 호출 불가능
