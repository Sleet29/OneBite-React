// 콜백 함수
function main(value) {
  console.log(1);
  console.log(2);
  value();
  //   console.log("end");
}

function sub() {
  // sub글자만 빼서 익명함수로도 사용가능하다. // 화살표 함수로 변경도 가능하다
  //   console.log("i am sub");
}

main(sub); // 여기서 sub가 콜백함수다.
// 설명은 자신이 아닌 다른 함수에, 인수로써 전달된 함수란다.
// main 함수에 인수로 전달 되어서 위의 main 함수가 알아서 실행

// 1. 콜백함수

// 2. 콜백함수의 활용
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

repeat(5);

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeatDouble(5);
