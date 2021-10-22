const numberOfCategories = document.querySelector('#categories')

console.log(`Number of categories: ${numberOfCategories.children.length}`)

document.querySelectorAll('.item h2').forEach((elem) =>
  console.log(
    `Category: ${elem.textContent}, 
Elements: ${elem.nextElementSibling.children.length}`,
  ),
)
