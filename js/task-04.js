// Select the span where the counter value is displayed
const valueSpan = document.getElementById('value');

// Initialize counter value
let counterValue = 0;

// Update the UI with the current counter value
function updateValue() {
  valueSpan.textContent = counterValue;
}

// Select the increment and decrement buttons
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

// Add click event listener to the increment button
incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateValue();
});

// Add click event listener to the decrement button
decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateValue();
});
