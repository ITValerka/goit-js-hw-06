const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const spanValue = document.querySelector('#value')
let counterValue = 0
const incrementCounter = () => (spanValue.textContent = counterValue += 1)
const decrementCounter = () => (spanValue.textContent = counterValue -= 1)
decrementBtn.addEventListener('click', decrementCounter)
incrementBtn.addEventListener('click', incrementCounter)
