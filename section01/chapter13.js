// 콜백 함수
function main(value) {
  //   console.log(1);
  //   console.log(2);
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
// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }

// repeat(5);

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     // console.log(idx * 2);
//   }
// }

// 위와같이 같은 원리의 함수들을 이름만 double, triple 등으로 바꾸면 중복 코드가 발생하여 좋지 않음
// 이런경우에 콜백 함수를 사용
// 그래서 어떻게 바꾸냐면~

function repeatPractice(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeatPractice(5, function (idx) {
  console.log(idx);
});

repeatPractice(5, function (idx) {
  console.log(idx * 2);
});

repeatPractice(5, function (idx) {
  console.log(idx * 3);
});

// repeatPractice(5, (idx) => {
// console.log(idx * 3);
// });  이런식으로 간편하게 바꿀 수 있다. 콜백 함수는 자주 사용하는듯하니 잘 익혀두자
