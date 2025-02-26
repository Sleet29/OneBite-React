// 자바스크립트의 함수

function greeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
greeting();
// 함수 호출은 반드시 소괄호()와 함께
console.log("호출 후");

function getArea(width, height) {
  // let width = 10;
  // let height = 20;
  // let are = width * height;
  let area = width * height;

  function another() {
    // 중첩 함수 (함수안에 함수를 하나 더 넣어도 작동)
    console.log("another");
  }

  // 자바 스크립트의 호이스팅
  // -> 끌어 올리다라는 뜻
  // 선언문을 호출문보다 아래두어도 끌어올려져서 실행되기 때문에 문제 발생하지 않음

  //   console.log(area);
  return area; // return이 나오면 값을 반환하고 바로 종료, return문 밑에 작성해도 수행하지 않음
}

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);
