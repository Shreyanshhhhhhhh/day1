document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const form = event.target;
  const inputs = form.elements;
  let isValid = true;

  // Validate form inputs
  Array.from(inputs).forEach((input) => {
    const errorMessage = input.nextElementSibling; // Get the associated small tag for error messages

    if (errorMessage && !input.checkValidity()) {
      isValid = false;
      errorMessage.style.display = "block"; // Show error message
    } else if (errorMessage) {
      errorMessage.style.display = "none"; // Hide error message
    }
  });

  if (isValid) {
    // Print form data to the console
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  }
});

// Hide all error messages initially
document.addEventListener("DOMContentLoaded", function () {
  const errors = document.querySelectorAll("small");
  errors.forEach((error) => {
    error.style.display = "none";
  }); 
});