//Changing navigation
let currentClass = document.getElementsByClassName('home');

function toggleDisplay(className) {
    // If there is a currently displayed class, hide its elements
    if (currentClass) {
        const elementsToHide = document.getElementsByClassName(currentClass);
        for (let element of elementsToHide) {
            element.style.display = "none";
        }
    }
    
    // Display the elements of the provided class
    const elementsToShow = document.getElementsByClassName(className);
    for (let element of elementsToShow) {
        element.style.display = "block";
    }
    
    // Update the currently displayed class
    currentClass = className;
}






//Muscle
document.addEventListener('DOMContentLoaded', (event) => {
    const upButton = document.querySelector('.up-btn');
    const downButton = document.querySelector('.down-btn');
    const carousel = document.querySelector('.carousel');
    let currentItem = 0;
  
    upButton.addEventListener('click', () => {
      if (currentItem > 0) {
        currentItem--;
        updateCarousel();
      }
    });
    
    function updateCarousel() {
      const itemHeight = document.querySelector('.video-item').offsetHeight;
      carousel.style.transform = `translateY(-${itemHeight * currentItem}px)`;
    }
  
    upButton.addEventListener('click', () => {
      const videoItems = document.querySelectorAll('.video-item');
      carousel.insertBefore(videoItems[videoItems.length - 1], videoItems[0]);
    });
  
    downButton.addEventListener('click', () => {
      const videoItems = document.querySelectorAll('.video-item');
      carousel.appendChild(videoItems[0]);
    });
  
  });
  

  //Dark Mode
  document.getElementById('darkMode').addEventListener('change', function(event) {
    document.body.classList.toggle('dark-mode', event.target.checked);
});

// form check
// This function will be called when the form is submitted
function validateForm() {
    // Get the form elements
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;

    // Check if name is not empty
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    // Check if email is not empty
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    // Check if email is valid
    var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!re.test(email)) {
        alert("Email is not valid");
        return false;
    }

    // If everything is valid, return true
    return true;
}
