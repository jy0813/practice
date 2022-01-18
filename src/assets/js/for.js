'use strict';


var obj = { name : 'kim', age : 30}; //kim 말고 숨겨진 정보들도 있음
Object.getOwnPropertyDescriptor(obj, 'name');

for (let i = 0; i < 3; i++) { // 코드를 여러번 실행할때

}

[1,2,3].forEach(() => { //array 전용 (자료를 꺼내쓸 때)

});

for (let key in obj) { //obj 전용 (자료를 꺼내쓸 때), 부모의 prototype도 반복해줌
  console.log(obj[key]); //enumerable(셀 수 있는지 여부) 한 것만 반복
}

//for (let key of ) { } iterable 전용

class 부모 {

}

부모.prototype.name ="park";

var obj2 = new 부모();

for (let key in obj2) {//내가 가진것만 출력
  if(obj2.hasOwnProperty(key)) {
    console.log(obj2[key]);
  } 
}

var array = [2,3,4,5]

for (let 자료 of array) { // array, 문자, arguments, nodelst, map, set
  console.log(자료)
}

array[Symbol.iterator](); // 이게 있으면 iterator한 자료형임

//document.getElementsByClassName(); // []가 남음  - NodeList(iterable)
//document.querySelectorAll(); // []가 남음 - NodeList(iterable)

let 데이터 = [1,2,3,4,5,6,7,8,9];

for (let 구구단 of 데이터) {
  
}

var products = [
  {
    name1 : 'chair',
    price1 : 7000,
  },
  {
    name2 : 'sofa',
    price : 5000,
  },
  {
    name1 : 'desk',
    price3 : 9000,
  },
]; 

