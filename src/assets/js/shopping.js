'use stric;'


var products = [{
    id: 0,
    price: 70000,
    title: 'Blossom Dress'
  },
  {
    id: 1,
    price: 50000,
    title: 'Springfield Shirt'
  },
  {
    id: 2,
    price: 60000,
    title: 'Black Monastery'
  }
]

const title = document.querySelectorAll('.title');
const price = document.querySelectorAll('.price');
const card = document.querySelectorAll('.card');

for (let i = 0; i < products.length; i++) {
  title[i].innerHTML = `${products[i].title}`;
  price[i].innerHTML = `가격 : ${products[i].price}`;
}

var array = [1, 3, 2, 5, 6];


//  기능정렬

var NewArray = array.filter((a) => {
  return a < 4
});


// array 자료에 전부 무언가를 해주고 싶을때

var newArray2 = array.map((a) => {
  return a * 2;
})



document.querySelector('#sort').addEventListener('click', () => {
  products.sort(function (a, b) {
    return a.price - b.price;
  });

  for (let i = 0; i < products.length; i++) {
    title[i].innerHTML = `${products[i].title}`;
    price[i].innerHTML = `가격 : ${products[i].price}`;
  }
})

document.querySelector('#sort2').addEventListener('click', () => {
  products.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  for (let i = 0; i < products.length; i++) {
    title[i].innerHTML = `${products[i].title}`;
    price[i].innerHTML = `가격 : ${products[i].price}`;
  }
});

document.querySelector('#sort3').addEventListener('click', () => {
  const result = products.filter((item) => {
    return item.price <= 50000;
  });
  console.log(result);
})