'use strict';

function 더하기(a,b = 10) { //함수의 default 파라미터 ( b가 없을시 10이라는 값을 넣어주세요)
  console.log(a + b);
}
더하기(1); //파라미터가 2개 들어가는 함수인데 1개만 써도 에러가 안남 

//함수의 arguments 

function 함수(a,b,c) {
  console.log(arguments); //모든 파라미터를 다루고싶은 경우 (모든 파라미터를 [] 안에 넣은 변수)
}

함수(1,2,3);

//arguments 보다 간편한 함수

function 함수2(a,b,...rest) { //함수안에 들어온 파라미터를 모두 담은  array 출력 그 특정 자리에 오는 모든 파라미터를 []에 담아줌
                              // 주의점 - 가장 뒤에 써야함, 2번이상 금지
  console.log(rest);
}

함수2(1,2,3,4,5,6,7);

function array(...rest) {
  console.log(rest)
}

var newArray = array(1,2,3,4,5);

Math.max(5,6,4,3);
var numbers = [2,3,4,5,6,7,8,2,3,42,4,11,553,2152,111];

console.log(Math.max(...numbers));

function 정렬(글자) {
  
  console.log([...글자].sort());
}

정렬('bear');

function 글자세기(글자) {
  let 결과 = {};

  [...글자].forEach( (a) => {
    if(결과[a] > 0) {
      결과[a] = 결과[a] + 1;
    } else {
      결과[a] = 1;
    }
  });

  console.log(결과);
}

글자세기('asdfasfasfasfㅁㄴㄻㄴㄻㄴㄹㅈㅈㅈㄻㅇㄴㅋㅍ');
