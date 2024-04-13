// Array of ingredients
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Select the ul#ingredients list
const list = document.getElementById('ingredients');

// Create a document fragment to hold all li elements
const fragment = document.createDocumentFragment();

// Loop through each ingredient
ingredients.forEach(ingredient => {
  // Create an li element
  const li = document.createElement('li');
  
  // Set the text content of li
  li.textContent = ingredient;
  
  // Add the 'item' class to the li
  li.classList.add('item');
  
  // Append the li to the document fragment
  fragment.appendChild(li);
});

// Append the document fragment to the ul#ingredients
list.appendChild(fragment);
