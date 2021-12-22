'use stric;'

//input 이벤트 = input 값이 바뀔때 (글자가 추가될때마다)
//change 이벤트 = input 값이 바뀌고 focus 잃을때 (select는 focus랑 상관없음)

const select = document.querySelector('#option1');
const select2 = document.querySelector('#option2');
const sizeSelect = document.querySelector('.size-select');

select.addEventListener('change', () => {
  if(select.value == '셔츠') {

  }
});