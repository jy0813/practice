'use strict;'

const btn = document.querySelector('.btn');
const h1 = document.querySelector('h1');
const h1Default = document.querySelector('h1').innerHTML;

window.addEventListener('load', () => {
  h1.innerHTML = '';

  for (let i = 0; i < h1Default.length; i++) {
    setTimeout(function() {
      h1.innerHTML = h1.innerHTML + h1Default[i]
    }, i * 500);
  }
})
