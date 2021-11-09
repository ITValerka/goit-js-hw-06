const inputTextRef = document.querySelector('#name-input')
const spanOutputRef = document.querySelector('#name-output')

inputTextRef.addEventListener('input', inputArea)
function inputArea(e) {
  let value = inputTextRef.value
  if (value === '') {
    spanOutputRef.textContent = 'Anonymous'
  } else spanOutputRef.textContent = value
}
