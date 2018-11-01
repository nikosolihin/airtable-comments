export default class Button {
  constructor(el) {
    this.el = el;
    el.addEventListener('click', this.hide);
  }

  hide = () => (this.el.style.display = 'none');
}
