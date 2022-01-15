'use strict';

//constructor - obj을 여러개 만들때 사용

var 사람 = {
  name : 'Kim',
  age : 15,
  sayHi : function() {
    console.log(`안녕하세요 ${this.name} 입니다`)
  }
};

사람.sayHi();

function Person(이름, 나이) { //constructor
  this.name = 이름; //this 는 새로 생성되는 obj 를 뜻함
  this.age = 나이;
  this.sayHi = function() {
    console.log(`안녕하세요 저는 ${this.name} 이고 ${this.age} 살 입니다.`)
  }
}

//new Person();  //<--obj 뽑힘

var 사람1 = new Person('Kim',26);
var 사람2 = new Person('Jin',30);

console.log(사람1);

사람1.sayHi();
사람2.sayHi();

// 상속을 구현할 수 있는 prototype(유전자)

Person.prototype.gender = '남'; // prototype에 값을 추가하면 모든 자식들이 물려받기 가능

사람1.toString(); //오브젝트나 어레이에 붙일 수 있는 내장함수


var arr = new Array(1,2,3); //var arr = [1,2,3] 이랑 같음


// 1. 프로토타입은 함수에만 생성됨 
// 2. 내 부모 유전자를 검사하고 싶다면 __proto__를 입력 
// 3. __proto__ 를 이용해 부모님 강제 등록하기

var 부모 = {name : 'kim'};
var 자식 = {};

자식.__proto__ = 부모;

