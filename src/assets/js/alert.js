'use strict;'

function alertOn(파라미터, 파라미터2) {
  document.querySelector('P').innerHTML = 파라미터;
  document.querySelector('.alert_box').style.display = 파라미터2;
}

function alertOff(파라미터, 파라미터2) {
  document.querySelector(파라미터2).style.display = 파라미터;
}

document.querySelector('.close').addEventListener('click', () =>{
  document.querySelector('.alert_box').style.display = 'none';
});

function plus(파라미터) {
  2 + 파라미터
}

plus(1);



