'use stric;'

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

/\S+@\S+.\S/.test();