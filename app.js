

//FUNCTION FOR SMOOTH SCROLL WHEN NAVBAR IS CLICKED
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

  // Get the modal
  let modal = document.getElementById("contact-modal");

  // Get the button that opens the modal
  let btn = document.querySelector(".contact-me");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close-button")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Handle form submission
let form = document.getElementById("contact-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    sendEmail();
  });

  function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let mailto = "mailto:iliasbendev@gmail.com?subject=New Message from " + name + "&body=" + message;
    window.location.href = mailto;
  }