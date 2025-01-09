// Select all stars and the output element
const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output');

// Add an event listener for each star
stars.forEach((star, index) => {
  star.starValue = index + 1; // Set the star value

  star.addEventListener('click', starRate);

  function starRate(event) {
    const selectedStarValue = event.target.starValue; //4

    // Update the output text
    output.textContent = `You Rated this ${selectedStarValue} stars`;

    // Loop through stars and apply/remove the 'orange' class
    stars.forEach((currentStar, i) => {
      if (i < selectedStarValue) {
        currentStar.classList.add('orange');
      } else {
        currentStar.classList.remove('orange');
      }
    });
  }
});
