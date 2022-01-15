'use strict';

//premitive data type 

var 변수 = 'dddd';  //변수에 값이 그대로 저장됨
var array = [1,2,3]; //reference가 저장됨
var obj = {name : 'kim'};  //reference가 저장됨

//var 이름1 = '김';
//var 이름2 = 이름1;
//이름1 = '박';

// 위를 reference type으로 변경

var 이름1 = {name : '김'};
var 이름2 = 이름1;
이름1.name ='박';


var 이름3 = {name : '이'};
var 이름4 = {name : '이'};

function 변경(obj) { //파라미터는 변수생성 & 할당과 똑같음. var obj 와 똑같음
  obj = {name : 'park'}
}

변경(이름3);