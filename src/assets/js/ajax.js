'use strict;'

$.ajax({
  url: 'https://codingapple1.github.io/hello.txt',
  type:'GET'
}).done(function(데이터) {
  console.log(데이터);
});

document.querySelector('.btn.btn-danger').addEventListener('click', () => {
  $.ajax({
    url: 'https://codingapple1.github.io/hello.txt',
    type:'GET'
  }).done(function(데이터) {
    document.querySelector('.hello').innerHTML = 데이터;
  }).fail(function() {
    console.log('실패했습니다.')
  }).always(function() {
    console.log('로딩중입니다.')
  })
})

const img =  document.querySelector('.card-img-top');

document.querySelector('.btn.btn-dark').addEventListener('click', () => {
  $.ajax({
    url: 'https://codingapple1.github.io/data.json',
    type:'GET'
  }).done(function(상품) {
    document.querySelector('.card-title').innerHTML = 상품.model;
    document.querySelector('.card-text').innerHTML = 상품.price;
    img.setAttribute('src', 상품.img);
  })
})

