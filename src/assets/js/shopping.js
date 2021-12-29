'use stric;'

const PRODUCT_LIST = [
  {
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
  },
  {
    id: 3,
    price: 60000,
    title: 'Black Monastery'
  },
  {
    id: 4,
    price: 60000,
    title: 'Black Monastery'
  }
];

const title = document.querySelectorAll('.title');
const price = document.querySelectorAll('.price');

// for (let i = 0; i < products.length; i++) {
//   title[i].innerHTML = `${products[i].title}`;
//   price[i].innerHTML = `가격 : ${products[i].price}`;
// }
function render(productList, $target) {
  let allMarkup = ''; //통으로 모을 변수

  for (let i = 0; i < productList.length; i++) {
    const markup = `
      <div class="card">
        <img src="https://via.placeholder.com/600">
        <div class="card-body">
          <h5 class="title">${productList[i].title}</h5>
          <p class="price">가격 : ${productList[i].price}</p>
          <button class="btn btn-danger">주문하기</button>
        </div>
      </div>`;
  
      allMarkup += markup;  //allMarkup = allMarkup + markup; 계속 합침
  }

  $target.innerHTML = allMarkup;
}

function addButtonEventListener() {
  //가격순 정렬
  document.querySelector('#sort').addEventListener('click', () => {
    const productList = [...PRODUCT_LIST];
    const $card = document.querySelector('.card-group');

    productList.sort(function (a,b) {
      return a.price - b.price;
    });

    render(productList, $card);
  });

  // document.querySelector('#sort').addEventListener('click', () => {
  //   const productList = [...PRODUCT_LIST].sort((a,b) => a.price - b.price);
  //   const $card = document.querySelector('.card-group');

  //   render(productList, $card);
  // })

  //가나다순 정렬
  document.querySelector('#sort2').addEventListener('click', () => {
    const productList = [...PRODUCT_LIST];
    const $card = document.querySelector('.card-group');

    productList.sort(function (a,b) {
      if(a.title < b.title) {
        return -1;
      }
      if(a.title > b.title) {
        return 1;
      }
    });

    render(productList, $card);
  })

  //5만원 이하 가격 필터
  document.querySelector('#sort3').addEventListener('click', () => {
    const productList = [...PRODUCT_LIST];
    const $card = document.querySelector('.card-group');
    const result = productList.filter((item) => {
      return item.price <= 50000;
    });

    render(result, $card);
  });
}

function init() {
  const productList = [...PRODUCT_LIST];
  const $card = document.querySelector('.card-group');

  render(productList, $card);
  addButtonEventListener();
}


init();