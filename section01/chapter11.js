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

  //   console.log(area);
  return area;
}

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);
