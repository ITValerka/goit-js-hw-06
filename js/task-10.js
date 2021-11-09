const divControls = document.querySelector('#controls')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const divBoxes = document.querySelector('#boxes')
btnCreate.addEventListener('click', createBoxes)
btnDestroy.addEventListener('click', destroyBoxes)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function createBoxes(amount) {
  const Elem = document.createElement('div')
  Elem.style.backgroundColor = getRandomHexColor()
  Elem.style.width = '30px'
  Elem.style.height = '30px'
  divBoxes.append(Elem)
}
function destroyBoxes() {
  divBoxes.removeChild(Elem)
}

//  НЕ СМОГ :-(
