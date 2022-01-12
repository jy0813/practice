'use strict;'

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const card = document.querySelectorAll('.card-box');
  console.log(scrollTop);
    const y = (-1/500) * scrollTop + 115/50
    const z = (-1/5000) * scrollTop + 500/500;
    card[0].style.opacity = y;
    card[0].style.transform = `scale(${z})`;
})

