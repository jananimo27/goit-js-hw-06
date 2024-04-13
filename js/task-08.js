// Select the form element
const loginForm = document.querySelector('.login-form');

// Event listener for the form submission
loginForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Access the form elements directly
    const { email, password } = event.currentTarget.elements;

    // Check if both email and password fields are filled
    if (email.value === '' || password.value === '') {
        alert('All fields must be filled in!');
        return; // Stop the function if any field is empty
    }

    // Collect field values into an object
    const formData = {
        email: email.value,
        password: password.value
    };

    // Log the data object to the console
    console.log('Form Data:', formData);

    // Reset the form fields
    loginForm.reset();
});
