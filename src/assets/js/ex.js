'use stric;'

//전역변수

// var 이름 = 'jin';
// var 나이 = '29';

function 범위() {
  //지역변수
  // var 이게범위 = 10;
  // 이게범위;
}


//범위가 function
// var 나이 = 20;

//function 포함 범위가 {} 안에서만
//재선언이 불가능한 변수를 만들 때 let
// let 나이 = 20;

//function 포함 범위가 {} 안에서만
//재선언이 불가능한 변수를 만들 때
//재할당이 불가능한 변수를 만들 때 (변하지 않는 값을 만들 떄)
// const 나이 = 20;
// 나이 = 21; //할당

var 예금액 = 60000;
var 미래예금액 = 0;

if(예금액 >=50000) {
    미래예금액 = 예금액 + 예금액 * 0.2 * 2;
} else {
  
미래예금액 = 예금액 + 예금액 * 0.15 * 2;
}

console.log(미래예금액);

var 첫커피양 = 360;
var 마신커피 = 0;

var 리필양 = (첫커피양 * 2 / 3 );
마신커피 = 첫커피양 + 리필양;

console.log(마신커피);

리필양 = (리필양 * 2 / 3);
마신커피 = 마신커피 + 리필양;

console.log(마신커피);
