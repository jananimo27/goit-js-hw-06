// Select DOM elements
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');
const inputNumber = document.querySelector('#controls input[type="number"]');

// Function to create a random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Function to create boxes
function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let initialSize = 30; // Starting size of the first box

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${initialSize}px`;
    box.style.height = `${initialSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    initialSize += 10; // Increase the size for the next box
  }

  boxesContainer.appendChild(fragment);
}

// Function to destroy all boxes
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Event listeners for create and destroy buttons
createButton.addEventListener('click', () => {
  const numberOfBoxes = parseInt(inputNumber.value, 10);
  destroyBoxes(); // Clear existing boxes before creating new ones
  createBoxes(numberOfBoxes);
});

destroyButton.addEventListener('click', destroyBoxes);
