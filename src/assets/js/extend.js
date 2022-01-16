'use strict';

class 할아버지 {
  constructor(name, name2) {
    this.first = "kim",
    this.name = name
    this.name2 = name2;
  }
  sayHi() {
    console.log('아룡하세욤')
  }
}

class 아버지 extends 할아버지 { //할아버지의 속성들을 그대로 물려받아서 유사한 class 만들기
  constructor(name, name2) {
    super(name, name2); //물려받는 calss의 constructor 라는 뜻;
    this.나이 = 50; //extends 해서 만든 class 는 this는 그냥 못씀, super() 다음에 써야함
  }
  sayHi() {
    console.log('안녕 저는 아버지에요')
    super.sauhi(); // 부모 class의 prototype을 의미
  }
}

var 아버지1 = new 아버지('민수','갑수');



