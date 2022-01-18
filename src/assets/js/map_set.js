'use strict';

//map 자료형 - 자료간의 연관성을 표현하기 위해 씀.
//obj 자료형은 다 가능함 (오브젝트 자료형은 자료이름으로 글자만 가능)
var person = new Map();
person.set('name', 'kim');
person.set('age', 20);

person.get('age'); //맵에서 자료 꺼내는법
person.delete('age') //삭제하는법
person.size //자료 갯수 세는법

for (var key of person.keys()) {//반복문으로 map에서 자료 꺼내는 법
  console.log(key);
}

var person2 = new Map([ //map 자료형에 직접 자료 집어넣기
  ['name', 'kim'],
  ['age', 20]
])

//set 자료형 - 중복자료를 허용하지않음 array와 비슷함

var 출석부 = ['john', 'tom', 'andy', 'tom'];

var 출석부2 = new Set(['john', 'tom', 'andy', 'tom']);

출석부2.add('sally') //자료 추가
출석부2.delete() // 자료 삭제
출석부2.has() //자료의 true false 여부
출석부2.size //자료의 개수

출석부 = [...출석부2] // array 중복자료 제거

for (let 돌려 of 출석부2) {
  console.log(출석부2[돌려]);
}
