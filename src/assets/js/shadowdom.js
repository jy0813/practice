'use strict';

document.querySelector('#mordor').attachShadow({mode : 'open'}) //shadowroot 열어주는 함수
document.querySelector('#mordor').shadowRoot.innerHTML = `<p>야호 숨겨져있당</p>`

class 클래스 extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode : 'open'})
    this.shadowRoot.append(template1.content.cloneNode(true))
    let el = this.shadowRoot.querySelector('p');
    el.addEventListener('click', () => {
      console.log('클릭');
    })
  }
}

customElements.define('custom-input', 클래스);