let accordions = document.querySelectorAll("button.accordion");

accordions.forEach((acco) => {
  acco.onclick = () => {
    acco.classList.toggle("active");
    acco.nextElementSibling.classList.toggle("active-panel");
    acco.getElementsByClassName("fa-solid")[0].classList.toggle("fa-chevron-up");
    acco.getElementsByClassName("fa-solid")[0].classList.toggle("fa-chevron-down")
  };
});

// Get all close buttons
var closeButtons = document.querySelectorAll('.close-button');

// Loop through each close button and add click event listener
closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the parent li element and remove it from the DOM
        var liElement = button.closest('.card');
        if (liElement) {
            liElement.remove();
        }
    });
});

document.getElementById("footer-year").textContent = new Date().getFullYear();