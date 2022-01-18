'use strict';

class 클래스 extends HTMLElement {
  connectedCallback() {
    let name = this.getAttribute('name');
    this.innerHTML = `<p>${name} 안녕하세욤</p>`
  }
  static get observedAttributes() { //name 이라는 attribute 바뀌는지 체크
    return ['name']
  }
  attributeChangedCallback() {
    console.log(this.getAttribute('name'));
  }
}

   customElements.define('custom-input', 클래스);