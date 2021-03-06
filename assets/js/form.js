// form.js variables
let validationNullCheck = document.getElementsByClassName("validation-check");

// form.js event listeners
document.getElementById("contact-submit-button").addEventListener("click", validationCheck);
document.getElementById("close-submit").addEventListener("click", function() {
  document.getElementById("submit-container").classList.toggle("hide-me");
});

// form.js functions
/* validationCheck loops through all of the form fields checking for errors or type mismatches and then displays a message 
in a modal that differs depending on whether errors are found */
function validationCheck() {
  document.getElementById("submit-container").classList.toggle("hide-me");
  let failCheck;
  for (let i = 0; i < validationNullCheck.length; i++) {
    if (validationNullCheck[i].value == null || validationNullCheck[i].value == "" || validationNullCheck[i].value == "Select..." || validationNullCheck[i].validity.typeMismatch) {
      failCheck = "Fail";
    }
  }
  if (failCheck == "Fail") {
    event.preventDefault();
    document.getElementById("submit-modal-text").innerHTML = "Sorry, something on your form doesn't look right. Please review your answers and try to submit again.";
  } else {
    document.getElementById("submit-modal-text").innerHTML = "Thank you for your submission! We'll be in contact with you regarding your message as soon as we can.";
  }
  return false;
}