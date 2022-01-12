'use strictt;'

let menu = document.querySelector('.left_menu');
let btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   menu.animate([{ marginLeft: '0px'}],
//   {
//     duration: 1000,
//   });
// });


let slideBtn1 = document.querySelector('.slide_1');
let slideBtn2 = document.querySelector('.slide_2');
let slideBtn3 = document.querySelector('.slide_3');
let slideNext = document.querySelector('.slide_next');
let slidePrev = document.querySelector('.slide_prev');
let slideContainer = document.querySelector('.slide_container');
let slideNow = 0;


slideBtn1.addEventListener('click', () => {
  slideContainer.style.transform = 'translateX(0vw)';
});


slideBtn2.addEventListener('click', () => {
  slideContainer.style.transform = 'translateX(-100vw)';
});

slideBtn3.addEventListener('click', () => {
  slideContainer.style.transform = 'translateX(-200vw)';
});

slideNext.addEventListener('click', () => {
    slideContainer.style.transform = `translateX(-${slideNow}00vw)`;
    if (slideNow < 2) {
      slideNow = slideNow + 1;
    }
})

slidePrev.addEventListener('click', () => {
  slideContainer.style.transform = `translateX(-${slideNow}00vw)`;
  if (slideNow > 0) {
    slideNow = slideNow - 1;
  }
})
