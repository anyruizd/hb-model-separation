export default class TextRetriever {
  constructor (node, callback) {
    this.input = node.querySelector('input')
    this.button = node.querySelector('button')
    this.callback = callback
    this.bindEvents()
  }

  bindEvents () {
    this.button.addEventListener('click', () => {
      this.callback(this.input.value)
      this.input.value = ''
    })
  }
}
