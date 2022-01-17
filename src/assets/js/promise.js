'use strict';

var promise = new Promise(function(resolve, reject) { // 성공/실패 판정 기계;
  var 연산 = 1 + 1 ;
  resolve(연산); 
}); 

promise.then(function(결과) { //promise가 성공일 경우 실행할 코드 
  console.log(결과);
}).catch(function() { // 실패할 경우에도 코드 실행  
  console.log('실패하였습니다.')
}).finally(function() { // 성공이든 실패든 일어났을때 실행
  console.log('함수를 실행하였습니다.');
});

var promise2 = new Promise(function(resolve, reject) {
setTimeout(function() {
  reject();
},3000);
});

promise2.catch(function() {
  console.log('ㅊㅋㅊㅋ')
});

//fetch() // promise를 return(남김) 함 

var test = document.querySelector('#test');

var img= new Promise(function(resolve, reject) {
  test.addEventListener('load', () => {
    resolve();
  });
  test.addEventListener('error', () => {
    reject();
  })
})

img.then(function() {
  console.log('성공');
}).catch(function() {
  console.log('실패');
})

var text = new Promise((resolve, reject) => {
  $.get('https://codingapple1.github.io/hello.txt').done(function(결과) {
  resolve(결과)
});
})

text.then(function(결과) {
  console.log(결과)
  return new Promise((resolve, reject) => {//다음 ajax를 요청하는 promise
    $.get('https://codingapple1.github.io/hello2.txt').done(function(결과) {
    resolve(결과)
  }); 
  }); 
}).then(function(결과) {
  console.log(결과);
})
