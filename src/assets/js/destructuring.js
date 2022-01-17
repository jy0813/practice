'use strict';

//arr 데이터를 전부 변수에 담기

var arr = [1,2,3];

var [a,b,c] = [1,2,3];

var [d,e,f = 5] = [3,4]; //등호로 기본값 지정 가능

//obj 데이터를 전부 변수에 담기

var obj = {name : 'kim', age : 20};

var {name, age} = {name : 'kim', age: 20}; //오브젝트는 변수명을 key명과 똑같이 써야함. 기본값 지정가능

//변수들을 obj에 넣기

var first = 'kim';
var birth = 30;

var object = {name : first , age : birth};
var object2 = {first, birth}; // 키와 밸류값이 같을때

//함수 파라미터를 만들때

var obj2 = {name : 'kim', age : 30};

function 함수({first, birth}) {
  console.log(first);
  console.log(birth);
}

함수({first, birth});