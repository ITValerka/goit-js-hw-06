const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')
inputRef.addEventListener('input', fontSizeSlider)

function fontSizeSlider(event) {
  textRef.style.fontSize = `${inputRef.value}px`
}
