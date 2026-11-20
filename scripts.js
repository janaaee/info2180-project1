/* Add your JavaScript to this file */
window.onload = function() {
    let form = document.querySelector(".newsletter form");
    let emailInput = document.querySelector("#email");
    let message = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let email = emailInput.value;

        if  (email == "") {message.textContent = "Please enter a valid email address.";
        }
        else {message.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
        }
    });
};