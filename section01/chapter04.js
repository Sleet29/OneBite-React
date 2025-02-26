// 1. 변수
let age = 27;
// 변수를 선언하는 과정, let - 초기화한다
console.log(age);

age = 30;
console.log(age);

// let age=40;와 같이 중복선언 불가

// 2. 상수
const birth = "1997.01.07";
// 변수와 비슷하지만 한번 입력한 값 수정불가
birth = "123";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $(달러), _(언더스코어) 제외한 기호 사용할 수 없다.
let $_name;

// 3-2. 변수의 이름은 숫자로 시작 할 수 없다.
// let 2name; 불가
let name1;
let _2name; // 이와같이 쓰면 가능

// 3-3. 예약어 사용 불가
// let if
// let let

// 4. 변수 명명 가이드
// let a = 1, let b=1, let c= a-b 이런식으로 의미없이 하지말고
let salesCount = 1;
let refundCount = 1;
let totalCount = salesCount - refundCount;
