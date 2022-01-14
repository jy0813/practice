'use strict';

//input 이벤트 = input 값이 바뀔때 (글자가 추가될때마다)
//change 이벤트 = input 값이 바뀌고 focus 잃을때 (select는 focus랑 상관없음)

const select = document.querySelector('#option1');
const select2 = document.querySelector('#option2');
const sizeSelect = document.querySelector('.size-select');
let size = [90, 100, 105, 110, 115];
let size2 = [28, 30, 32, 33, 34]

window.addEventListener('load', () => {
  for (let i = 0; i < size2.length; i++) {
    const options = document.createElement('option');
    options.value = size2[i];
    options.text = size2[i];
    select2.append(options)
}
})



select.addEventListener('change', () => {
   if(select.value == '바지') {
    document.querySelector("#option2").innerHTML = "";
    for (let i = 0; i < size2.length; i++) {
      const options = document.createElement('option');
      options.value = size2[i];
      options.text = size2[i];
      select2.append(options)
  }
  }else if (select.value == '셔츠') {
    document.querySelector("#option2").innerHTML = "";
    for (let i = 0; i < size.length; i++) {
      const options = document.createElement('option');
      options.value = size[i];
      options.text = size[i];
      select2.append(options)
    }
  }
});

var 출석부 = ['홍민', '영희', '철수', '재석']

function 이름찾기(이름) { 
  출석부.forEach(function(el, i) {
    if(이름 == 출석부[i]) {
      console.log('있어요');
    }
  }) 
}

이름찾기('재석');

for(let j = 2; j < 10; j++) {
  for(let i = 1; i < 10; i++) {
    console.log(j * i);
  }
}

function 목표량계산기(판매실적어레이, 평균월별판매량) {
  var 실적5개월 = 0;
  for(let i = 0; i < 5; i++) {
    실적5개월 = 실적5개월 + 판매실적어레이[i];
  }

  var 실적12월 = 6 * 평균월별판매량 - 실적5개월;
  console.log(실적12월);
}

목표량계산기();

console.log(목표량계산기([15,20,13,33,66,24], 35));

