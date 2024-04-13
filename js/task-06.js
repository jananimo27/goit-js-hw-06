// Select the input element
const validationInput = document.getElementById('validation-input');

// Function to check the length of the input against the specified data-length
function validateInput() {
  const requiredLength = parseInt(validationInput.dataset.length, 10);
  const inputLength = validationInput.value.length;

  // Remove previous validation classes
  validationInput.classList.remove('valid', 'invalid');

  // Check if the input length matches the required length
  if (inputLength === requiredLength) {
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.add('invalid');
  }
}

// Add an event listener for the blur event on the input
validationInput.addEventListener('blur', validateInput);
