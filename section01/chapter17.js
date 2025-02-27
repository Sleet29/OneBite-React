// 배열이란?
// 여러개의 값을 순차적으로 담을 수 있는 자료 형

// 1. 배열생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []]; // 어떤 타입의 값이던, 길이의 한계 없이 쉽게 저장가능
console.log(arrC);

// 2. 배열 요소 접근
// 0번부터 시작하고 index라고 부름(자바랑 동일)
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello"; // 특정 원소의 값을 수정하는 것도 가능
console.log(item1, item2);
