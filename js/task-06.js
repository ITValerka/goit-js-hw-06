const inputText = document.querySelector('#validation-input')
const validInputLength = inputText.getAttribute('data-length')
inputText.addEventListener('blur', validationInputLength)

function validationInputLength() {
  if (Number(validInputLength) === inputText.value.length) {
    inputText.classList.remove('invalid')
    inputText.classList.add('valid')
  } else {
    inputText.classList.remove('valid')
    inputText.classList.add('invalid')
  }
}
