'use strict;'

const items = document.querySelector('.items')
const input = document.querySelector('.footer_input')
const addBtn = document.querySelector('.footer_btn')
// const form = documnet.querySelector('.new_form')

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   onAdd();
// });

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아온다.
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  // 2. 새로운 아이템을 만든다. (텍스트 + 삭제 버튼)
  const item = createItem(text);
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가
  items.appendChild(item);
  // 4. 새로 추가된 아이템으로 스크롤링 
  item.scrollIntoView({
    block: 'center',
    behavior: 'smooth'
  });
  // 5. addBtn을 누르면 inout을 초기화
  input.value = '';
  input.focus();
}

let id = 0; //UUID

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');
  itemRow.setAttribute('data-id', id);

  itemRow.innerHTML = `
  <div class="item">
    <span class="item_name">${text}</span>
    <button class="item_delete">
      <i class="fas fa-trash-alt" data-id=${id}></i>
    </button>
  </div>
  <div class="item_divider"></div>`;
  id++;

  // const item = document.createElement('div');
  // item.setAttribute('class', 'item');

  // const name = document.createElement('span');
  // name.setAttribute('class', 'item_name');
  // name.innerText = text;

  // const btn = document.createElement('button');
  // btn.setAttribute('class', 'item_delete');
  // btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
  // btn.addEventListener('click', ()=> {
  //   items.removeChild(itemRow);
  // })

  // const itemDivider = document.createElement('div');
  // itemDivider.setAttribute('class', 'item_divider');

  // item.appendChild(name);
  // item.appendChild(btn);

  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
})

input.addEventListener('keydown', event => {
  if(event.isComposing) {
    return;
  }
  if (event.key === 'Enter') {
    onAdd();
  }
});

items.addEventListener('click', event => {
  const id =event.target.dataset.id;
  if(id) {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`)
    toBeDeleted.remove();
  }
})

