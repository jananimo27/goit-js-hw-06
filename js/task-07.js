// Select the input range element and the text span
const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

// Function to adjust the font size of the text
function adjustFontSize() {
  // Set the font size of the text span to match the input's current value
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
}

// Add an event listener for the input event on the font size control
fontSizeControl.addEventListener('input', adjustFontSize);

// Initialize the font size based on the current value of the input
adjustFontSize(); // Ensures that the font size is set correctly when the page loads
