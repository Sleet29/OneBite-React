// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = { a: 1 }; // 에러 발생... 그러나 ?

animal.age = 2; //추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 일반적인 cosnt 상수에서는 값을 변동시킬 수 없지만
// 상수 객체의 프로퍼티 값을 조작하는 것은 괜찮다!

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "이정환",
  // 메서드
  sayHi : function () {
    console.log("안녕!");
  },

  sayHi () {
    console.log("안녕!");
  }

  sayHi => (function) {
    
  }

};

person.sayHi(); // 함수이기에 호출 가능!
person["sayHi"]();

// 개념복습 ******

// var      재선언O, 재할당O
// let      재선언X, 재할당O
// const    재선언X, 재할당X

//예시
var 이름 = "park";
console.log(이름);
var 이름 = "song";
console.log(이름);
이름 = "kim";
console.log(이름);

let 나이 = 9;
console.log(나이);
// let 나이 = 15;
// console.log(나이);
나이 = 19;
console.log(나이);

const 주소 = "강남";
console.log(주소);
// const 주소 = "강서";
// console.log(주소);
주소 = "강남";
console.log(주소); // VS코드에서는 에러발생하지 않지만 브라우저에서는 에러 발생
