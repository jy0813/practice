'use strict';

// function 함수 () {

// }

// var 함수 = function() {

// }

// 함수();

//위 2개는 동일

var 애로우함수 = (a) => {
  return a + 10
}

애로우함수(5); //ES6 문법

//var 애로우함수 = a => a + 10 // 파라미터가 1개이면 소괄호가 생략 가능함 , 코드가 한줄이면 중괄호도 생략가능

[1,2,3,4].forEach( a => console.log(a));

document.getElementById('버튼').addEventListener('click', (e) => {
  console.log(e.currentTarget);
});

var 오브젝트 = {
  함수 : () => {
    console.log(this);
  }
}

오브젝트.함수();

var 사람 = {
  name: '손흥민',
  sayhi : function() {
    console.log(`안녕 나는 ${this.name}`);
  }
}

사람.sayhi();

var 자료 = {
  data: [1,2,3,4,5]
}

자료.전부더하기 = function() {
  var sum = 0;
  this.data.forEach(function(a) {
    sum = sum + a;
  });
  console.log(sum);
}

자료.전부더하기();

document.getElementById('버튼2').addEventListener('click', function(){
  setTimeout( () => console.log(this.innerHTML),3000);
});