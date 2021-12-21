'use stric'

let menu = document.querySelector('.left_menu');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  menu.animate([{ marginLeft: '0px'}],
  {
    duration: 1000,
  });
});