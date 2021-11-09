const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const ingredientsRef = document.querySelector('#ingredients')
const createIngredientList = (igredient) => {
  return ingredients.map((elem) => {
    const itemIngredient = document.createElement('li')
    itemIngredient.textContent = elem
    itemIngredient.classList.add('item')
    return itemIngredient
  })
}
const addIngredient = createIngredientList(ingredients)
ingredientsRef.append(...addIngredient)
