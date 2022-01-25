'use strict';

let prev = document.querySelector('.prev-button');
let next = document.querySelector('.next-button');
let carousel = document.querySelector('.carousel');
let item = document.querySelectorAll('.item');
let cellCount = 9; //아이템의 개수
let selectIndex = 0; // item index 번호
let modalWrap = document.querySelectorAll('.modal_wrap');


let rotateCarousel = function() {
  let angle = selectIndex / cellCount * -360;
  carousel.style.transform = `translateZ(-288px) rotateY(${angle}deg)`;
}

prev.addEventListener('click', () => {
  selectIndex--;
  rotateCarousel()
})

next.addEventListener('click', () => {
  selectIndex++;
  rotateCarousel()
})


item.forEach((item, index) => {
  item.addEventListener('click', () => {
    modalWrap[index].style.display = 'block';
  })
});
