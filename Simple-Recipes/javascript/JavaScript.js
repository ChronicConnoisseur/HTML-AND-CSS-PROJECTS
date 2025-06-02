//Recipe Pop up modal section

//Sets up button that will pen the recipe modal
var btns = document.querySelectorAll("input.modal-button");

//defines all modal for each recipe
var modals = document.querySelectorAll(".recipe-modal");

//Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

//when the user clicks the recipe button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event){
        modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

//When user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++){
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style){
                modals[index].style.display = "none";
            }
        }
    }
}
//Automatically close the modal after 10 seconds
setTimeout(function (){
    //looping through all modal elements
    for (var index in modals){
        //checking if the modal has a style property
        if (modals[index].style){
            //hiding the modal after 10 seconds
            modals[index].style.display = 'none';
        }
    }
}, 10000); //10,000 milliseconds = 10 seconds

//EMAIL VALIDATION

document.getElementById('contactForm').addEventListener('submit',
    function (event) {
        //overrides default browser refresh when the submit
        //button is pressed
        event.preventDefault();
        //Variables to validate that each field is filled out
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        /*Email pattern checks for all symbols that would be needed
        for an email address such as the @ symbol and . and the text
        that would come before, between, and after */
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //use this variable to display messages if fields are filled
        //out or a thank you message
        const valMsg = document.getElementById('validateMsg');

        if (!firstName || !lastName || !phone || !message) {
            //checks if fields have been filled out
            valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>'
        } else if (!emailPattern.test(email)) {
            //checks if there is a valid email
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email</p>'
        } else {
            //if all fields are filled out correctly display thank you message
            valMsg.innerHTML = '<p style="color:red;">Thank you for submitting</p>'
        }

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        };

        //displays what user wrote in console
        console.log(JSON.stringify(formData));
    }
)