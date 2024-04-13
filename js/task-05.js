// Select the input field and the output span
const inputField = document.getElementById('name-input');
const outputSpan = document.getElementById('name-output');

// Function to update the span based on input
function updateOutput() {
  // Check if the input field is empty
  if (inputField.value.trim() === '') {
    outputSpan.textContent = 'Anonymous';
  } else {
    outputSpan.textContent = inputField.value;
  }
}

// Add an event listener for input events on the input field
inputField.addEventListener('input', updateOutput);
