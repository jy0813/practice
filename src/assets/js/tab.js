'use stric;'

const tabBtn = document.querySelectorAll('.tab-button');
const tabCnt = document.querySelectorAll('.tab-content');
const tabNow = 0;


tabBtn.forEach(function(el, i){
  el.addEventListener('click', function(){
    for(let j = 0; j<tabBtn.length; j++){
      tabBtn[j].classList.remove('active');
      tabCnt[j].classList.remove('show');
    }
    el.classList.add('active');
    tabCnt[i].classList.add('show');
  })
})

