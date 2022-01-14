'use strict';


//변수는 선언, 할당, 범위, 호이스팅 이라는 특징이 있음.

var 이름 = 'kim'; //재선언 O 재할당 O 범위 : function
var 이름 = 'jin' // <- var 재선언 
이름 = 'choi'; //재할당

console.log(이름);

function 함수() {
  var 이름 = 'han'; //function 안에서만 존재
  console.log(이름);
}

함수();

let 이름2 = 'lee'; //재선언 X 재할당 O 범위 {}
//let 이름2 = 'jun';  <- 재선언 금지 ex
이름2 = 'kwon';

console.log(이름2);

function 함수2() {
  let 이름 = 'jong';
}

if(true) {
  let 이름 = 'park';
}

const 이름3 = 'park';// 재선언 X 재할당 X 범위 {}
//const 이름3= 'jang'; //<- 재선언 금지 ex
const 사람 = {
  이름 : 'kim',
} // 오브젝트 내부 값 변경은 가능 , 이것은 재할당이 아님.

사람.이름 = 'kang';

console.log(사람.이름);

Object.freeze(사람); // 사람이라는 오브젝트를 수정 불가능하게 만듬.


// 호이스팅

var 나이 = 30; // 자바스크립트 해석 : var 나이; 나이 = 30;  함수선언도 호이스팅이 일어남

//var : 호이스팅시 undefined 할당 됨 
//let, const : 호이스팅시 undefined 할당 X 
//finction 함수 () {} : 전부가 호이스팅됨
//var 함수 = function() {} : 선언 부분만 호이스팅

//변수 동시에 여러개 만들기

var 성별 = '남', 키 = 180, 몸무게 = 74; 

//전역변수 = 모든 곳에서 쓸 수 있는 변수

window.지역 = '서울';

console.log(지역);

function 함수3() {
  console.log(성별);
  var 나이 = 30;  //지역변수
}

함수3();

if(true) {
  let a = 1;
  var b= 2;
  if (true) {
    let b = 3;
  }
  console.log(b);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}

let button = document.querySelectorAll('button');
let modal = document.querySelectorAll('div');

for (let i = 0; i < modal.length; i++) {
  button[i].addEventListener('click', () => {
    modal[i].style.display = 'block';
  })
}

var 변수 = '손흥민';
var 문자 = `hi i'm ${변수}`;

function 해체분석기(문자들, 변수들) {
  console.log(문자들[1] + 문자들[0]);
  console.log(변수들);
} // 1번 파라미터 = 문자들을 array 화 시킴 , 2번째 파라미터2 ${변수} 를 뜻함 - {} 중갈호 기준으로 양옆 문자들을 array 화 시킴

변수 = '재론';


해체분석기`나는${변수}입니다.`

var pants = 20;
var socks = 100;

`바지${pants} 양말${socks}`;

function 재론상점(문자, 변수1, 변수2) {
  console.log(문자[1] + 변수1 + 문자[0] + 변수2);
}

재론상점`바지${pants} 양말${socks}`;

function 뚜덩상점(문자, 변수1, 변수2) {
  pants = 0;
  if (pants == 0) {
    변수1 = '다팔렸어요'
  }
  console.log(문자);
}

뚜덩상점`바지${pants}개구요 양말${socks}개에요`;
