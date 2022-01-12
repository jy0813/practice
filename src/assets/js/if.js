'use strict;'

const btn = document.querySelector('.btn');
const modalWrap = document.querySelector('.modal_wrap');
const close = document.querySelector('.close');
const input = document.querySelector('.test_input');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

// document.querySelector('form').addEventListener('submit', function(e) {
//   if(email.value == '') {
//     e.preventDefault();
//     document.querySelector('.error_txt').style.display = "block";
//   }
// });


btn.addEventListener('click', () => {
  modalWrap.style.display = "block";
});

close.addEventListener('click', () => {
  modalWrap.style.display = "none";
})

modalWrap.addEventListener('click', (e) => {
  if(e.target == e.currentTarget) {
    modalWrap.style.display = "none";
  }
})

// e.target; 지금 실제로 클릭한 요소
//e.currentTarget; 지금 이벤트리스너가 달린곳 (this)
//e.preventDefault(); 기본동작 막기

if(1 == 3) {
  console.log('안녕');
} else if (1 < 2) {
  console.log('안녕2');
} else {
  console.log('반가워');
}

if(1 == 2 && 2 == 2) { //전부 참일때
  console.log('모두 맞앗엉');
} else {
  console.log('모두 만족해야해');
}

if(1 == 2 || 2 == 2) {
  console.log('한개는 맞아!');
}

const n = '';

function 삼육구게임() {
  if(n % 9 == 0) {
    console.log('짝짝!');
  } else if(n % 3 == 0) {
    console.log('짝!');
  }
  else {
    console.log('통과!')
  }
}

삼육구게임();

//[] [찾을 문자의 범위]
/[A-z]/.test('s');

//[\S] 모든 문자와 모든 기호(모든 문자 1개)
/\S@/.test('#');

//[\S]+뒤에도 계속 찾아주세요

/\S+@\S+.\S+/.test()

document.querySelector('form').addEventListener('submit', function(){
  const 입력한이메일 = email.value;
  if(/\S+@\S+.\S+/.test(입력한이메일) == false) {
    e.preventDefault();
  } else if(입력한이메일 == ''){
    e.preventDefault();
  }
  const 입력한패스워드 = password.value;
  if(/[A-Z]+/.test(입력한패스워드) == false) {
    e.preventDefault();
  }
});

 
