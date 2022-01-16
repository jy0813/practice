'use strict';

//상속기능을 구현 

//Object.create(프로토타입object); es5방식 

var 부모 = {name : 'kim', age : 50};

var 자식 = Object.create(부모);

자식.age = 20;

console.log(자식);

var 손자 = Object.create(자식);


//es6방식

class 부모님 {
  constructor() { //파라미터 넣는곳
    this.name = 'kim'
    this.sayhi = function() {
      console.log('헤이~~')
    }
  }
}

var 자손 = new 부모님();

자손.__proto__;
Object.getPrototypeOf(자손); //__proto__ 와 같음;
