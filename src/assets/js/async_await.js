'use strict';

async function 더하기() { //async를 function 앞에 붙이면 함수 실행 후에 promise 오브젝트가 남음
  1 + 1
}

더하기().then(function () {
  console.log('성공')
});

async function 더하기() { //async를 function 앞에 붙이면 함수 실행 후에 promise 오브젝트가 남음
  return 1 + 1
}

더하기().then(function (결과) {
  console.log(결과)
});

//async function 안에 await 쓰기

async function 빼기() {
  var promise = new Promise(function (resolve, reject) {
    var 힘든연산 = 1 - 1;
    resolve(힘든연산);
  });
  try { //   이걸해보고 에러나면 뒤에 /실패시 에러 방지
  var 결과 = await promise; //프로미스 해결까지 기다림 then 대신 사용 가능, promise 실패시 에러나고 멈춤 , promise 연산결과는 변수에 저장 가능
  console.log(결과)
} catch {
  console.log('promise 연산이 잘안되엇군용')
}
}

빼기();

let btn = document.querySelector('.btn');

async function push() {
  var promise2 = new Promise(function(resolve, reject) {
    btn.addEventListener('click', () => {
      let 푸쉬 = 256 + 1;
      resolve(푸쉬);
    });
  });
  try {
    let 결과 = await promise2;
    console.log(결과);
  } catch {
    console.log('실패')
  }
}

push()