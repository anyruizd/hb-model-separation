export default class TextDisplayer {
  constructor (node, callback) {
    this.input = node.querySelector('input')
    this.button = node.querySelector('button')
    this.callback = callback
    this.bindEvents()
  }

  bindEvents() {
    this.button.addEventListener('click', this.displayValue.bind(this))
  }

  displayValue() {
    this.input.value = this.callback()
  }
}
