'use strict';

var 심볼 = Symbol('설명'); //obj 자료형의 비밀스런 key값

var height = Symbol('내 키임')
var weight = Symbol('내 시크릿 몸무게임')
var person = { name : 'kim'}; //var person = { name: 'kim' , [height] : 180}
person[weight] = 100;
person[height] = 180

for (let key in person) {
  console.log(person[key]);
}

//1. 설명이 같다고 같은 symbol이 아님

var a = Symbol('설명1')
var b = Symbol('설명1')

//2. 전역 변수같은 전역 Symbol

var c = Symbol.for('설명1');


//3. 기본 내장 symbol들
var 어레이 = [2,3,4]
어레이[Symbol.iterator];