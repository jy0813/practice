'use strict;'

const nav = document.querySelector('.nav_menu');

window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    nav.classList.add('active');
  }
  else {
    nav.classList.remove('active');
  }
})
