// 객체란?
// 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기에 용이하다
/*
    let person = {
        name: "이정환",
        nickname: "winterlood",
        age: 27,
        location: "목동",
    };
 */

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성))
let person = {
  name: "이정환", // key:value의 형태로 적으면됨
  age: 27,
  hobby: "테니스", // 프로퍼티 개수, 자료형 종류의 자유가 있음
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true, // 띄워쓰기가 포함된 문자열을 키로 사용하고 싶다면 ""로 감싸줘야 한다.
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // 줄그어지는건 타입스크립트 관련 경고사항으로, VS코드 기본기능임 = 신경안써도됨

// 괄호 표기법
let age = person["age"]; // 프로퍼티의 키를 꼭 ""(쌍따옴표와 함께 문자열)로 작성해야함!
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 점 표기법은 비교적 간단한 방법, 프로퍼티를 동적으로 변화시키면서 꺼내와야 할때는 괄호 표기법을 이용

// 3.2 새로운 프로퍼티를 추가, 수정하는 방법
person.job = "fe developer"; // 점표기법
person["favoriteFood"] = "떡볶이";

person["job"] = "be developer";
person.name = "송재혁";
// 수정이나 추가할때 사용하면 됨
console.log(person);

// 3.3 프로퍼티를 삭제하는 방법

delete person.job;
console.log(person); // 점 표기법
delete person["age"]; // 괄호 표기법
console.log(person);

// 3.4 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1);
let result2 = "age" in person;
console.log(result2);
