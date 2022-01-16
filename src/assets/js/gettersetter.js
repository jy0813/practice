'use strict';

//함수를 object 데이터를 다루는 이유는 1. object 자료가 복잡할 때 이득, 2. 자료수정시 편리 

var 사람 = {
  name : 'park',
  age : 30,
  get nextAge() { // 데이터 꺼내쓰는 함수 (return 값이 있어야함)
    return this.age + 1;
  },
  set setAge(나이) { //set 데이타 변경 (파라미터가 무조건 1개는 있어야함)
    this.age = parseInt(나이); // parseInt = 정수로 바꿔줌
  }
}

사람.setAge = '20';
사람.nextAge;

//class 에서 사용하는 get /set 

class 학생 {
  constructor() {
    this.name = "park",
    this.age = 20;
  }
  get nextAge() {
    return this.age + 1;
  }
}

var 학생1 = new 학생();

class 강아지 {
  constructor(type, color) {
    this.type = type,
    this.color = color;
  }
  한살먹기() {
    if(this instanceof 고양이) {
      this.age++
    }
  }
}

var 강아지1 = new 강아지('말티즈','white');
var 강아지2 = new 강아지('진돗개','brown');

class 고양이 extends 강아지 {
  constructor(type, color, age) {
    super(type, color)
    this.age = parseInt(age);
  }
}

var 고양이1 = new 고양이('코숏', 'white', 5);
var 고양이2 = new 고양이('러시안블루', 'brown', 2);

class Unit {
  constructor() {
    this.attack = 5,
    this.hp = 100;
  }
  get battlePoint() {
    return this.attack + this.hp;
  }
  set heal(add) {
    this.hp = this.hp + parseInt(add);
  }
}

var 인스턴스 = new Unit();

인스턴스.heal = 50;