'use strict';

console.log(this)

function 함수() {
  console.log(this);
}

함수();

//함수() = window.함수()

const object0 = {데이타 : '데이타1', 함수 : function() {console.log(this)}}

object0.함수();

const object1 = {
  data : {
   함수 : function() {
     console.log(this)
    }
  }
}
// = > data : {
//   함수() {
//     console.log(this)
//}
// }  이런식으로도 사용 가능(신문법)

object1.data.함수();

const object2 = {
  data : {
   함수 : () => {
     console.log(this)
    }
  }
} // 함수밖에 있던 상위요소를 그대로 씀

object2.data.함수();

//함수나 변수를 전역공간에서 만들면 {window}에 보관. {window} == global object; 전역변수 보관소


//오브젝트 반복 생성 기계 constructor

function 기계() {
  this.이름 = 'jin' // 여기서 this는 instance
}

const 오브젝트 = new 기계();

console.log(오브젝트);

document.getElementById('버튼').addEventListener('click', function(e) {
  console.log(this);
  console.log(e.currentTarget); //tihs = e.currentTarget 
})

document.getElementById('버튼2').addEventListener('click', function(e) {
  const array = [1, 2, 3];
  array.forEach(function(a) {
    console.log(this);
  });
})

const 오브젝트2 = {
  이름들 : ['김', '이', '빅'],
  함수 : function() {
    console.log(this);
    오브젝트2.이름들.forEach(function() {
      console.log(this)
    })
  }
}

오브젝트2.함수();

//arrow function 특징 : 내부의 this 값을 변화시키지 않음 (외부 this 값 그대로 재사용 가능)