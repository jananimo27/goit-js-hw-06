function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Select the button and the span where the color value will be displayed
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Event listener for the button click
changeColorButton.addEventListener('click', () => {
  const newColor = getRandomHexColor(); // Get a random color
  document.body.style.backgroundColor = newColor; // Set the body's background color
  colorSpan.textContent = newColor; // Display the color value in the span
});
