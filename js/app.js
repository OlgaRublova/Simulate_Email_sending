//variables
const sentBtn = document.getElementById("sendBtn"),
    email = document.getElementById("email"),
    subject = document.getElementById("subject"),
    message = document.getElementById("message");

//eventlisteners
function eventListeners() {
    //app init
    document.addEventListener("DOMContentLoaded", appInit);

    //validate the forms
    email.addEventListener('blur', validateField)
}

//functions

//app init initialization
function appInit() {
//disable the send btn on load
    sendBtn.disabled = true;
}