export default class backgroundChange {
  constructor(elem) {
    this.elem = elem;
    this.elemHeight = this.elem.clientHeight;
    this.percentage = Math.round(this.elemHeight / 360);
    this.init();
  }
  init() {
    this.bindEvents();
  }
  bindEvents() {
    const bh = window.innerHeight;
    window.addEventListener("load", () => {
      this.setting(bh);
    });

    window.addEventListener("scroll", () => {
      this.setting(bh);
    });
  }
  setting(bh) {
    const offsetY = window.pageYOffset;
    const scrollBottom = bh + offsetY;
    const calc = Math.floor(scrollBottom / this.percentage);
    this.changeBackground(calc);
  }
  changeBackground(calc) {
    this.elem.style.backgroundColor = `hsl(${calc}, 100%, 50%)`;
  }
}

const elem = document.querySelector('[data-module="backgroundChange"]');

new backgroundChange(elem);
