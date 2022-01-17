'use strict';

var a = 10;
var b = 20;
//export default a; //1개만
var c = 30;
export {a, b};
export default c;

function 첫째함수(파라미터) {
  console.log(1);
  둘째함수();
}

function 둘째함수() {
  console.log(2);
}

첫째함수();
둘째함수();

첫째함수(둘째함수);