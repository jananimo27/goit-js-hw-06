// Select all category items
const categories = document.querySelectorAll('#categories .item');

// Display the total number of categories
console.log(`Number of categories: ${categories.length}`);

// Iterate through each category to display its details
categories.forEach(category => {
  // Get the category name from the <h2> tag
  const categoryName = category.querySelector('h2').textContent;
  
  // Count the number of <li> elements within the current category
  const elementsCount = category.querySelectorAll('ul li').length;

  // Log the category details
  console.log(`\nCategory: ${categoryName}\nElements: ${elementsCount}`);
});
