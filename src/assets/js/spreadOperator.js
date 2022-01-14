'use strict';

var array = ['hello', 'world'];

console.log(...array); //대괄호를 제거 

var 문자 = 'hello';

console.log(...문자); //대괄호를 제거 

var a = [1,2,3];

var b = [4,5];

var c = [...a, ...b]; //Depp copy 각각 독립적인 값을 가지도록 복사

console.log(c);

var object1 = {a : 1, b :2};
var object2 = {...object1, c : 3}; //카피하다가 값 중복이 일어나면 가장 뒤에 있는걸 적용 한다,

console.log(object2);

function 더하기(a,b,c) {
  console.log(a + b + c);
}

var num = [10, 20, 30];

더하기(num[0], num[1], num[2]);

더하기.apply(undefined, num); //옛날 방식 , 파라미터로 array 집어넣기 가능
더하기(...num); // array 내의 모든 데이터를 파라미터로 집어넣고 싶은 경우

var person = {
  인사 : function() {
    console.log(this.name + '안녕');
  }
}

person.인사();

var person2 = {
  name : '손흥민'
}

person.인사.apply(person2, [1,2]) //위에 operator를 적용하고 싶을때는 apply를 사용 araay 형태로 집어넣기 가능
person.인사.call(person2, 1,2) //apply랑 비슷함